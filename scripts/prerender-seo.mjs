import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");
const portfolioSourcePath = path.join(projectRoot, "src/data/portfolio.ts");

const locales = ["en", "es"];
const localePathnames = {
  en: "/en/",
  es: "/es/",
};
const localeMeta = {
  en: { ogLocale: "en_GB", languageTag: "en" },
  es: { ogLocale: "es_ES", languageTag: "es-ES" },
};

const rawSiteUrl =
  process.env.SITE_URL ??
  process.env.VITE_SITE_URL ??
  "";
const siteUrl = normalizeSiteUrl(rawSiteUrl);

function normalizeSiteUrl(value) {
  return value.trim().replace(/\/+$/, "");
}

function toUrl(pathname) {
  return siteUrl ? `${siteUrl}${pathname}` : pathname;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function escapeJsonScript(value) {
  return value.replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

async function loadPortfolioContent() {
  const source = await fs.readFile(portfolioSourcePath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const tempPath = path.join(os.tmpdir(), `portfolio-content-${Date.now()}.mjs`);

  await fs.writeFile(tempPath, transpiled.outputText, "utf8");

  try {
    const module = await import(pathToFileURL(tempPath).href);
    return module.portfolioContent;
  } finally {
    await fs.rm(tempPath, { force: true });
  }
}

function removeManagedSeo(html) {
  const managedMetaNames = [
    "author",
    "description",
    "keywords",
    "robots",
    "twitter:card",
    "twitter:description",
    "twitter:title",
  ];
  const managedMetaProperties = [
    "og:description",
    "og:locale",
    "og:locale:alternate",
    "og:site_name",
    "og:title",
    "og:type",
    "og:url",
  ];

  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/gi, "")
    .replace(
      new RegExp(
        `<meta\\s+name=(["'])(${managedMetaNames.join("|").replace(/:/g, "\\:")})\\1[\\s\\S]*?>\\s*`,
        "gi",
      ),
      "",
    )
    .replace(
      new RegExp(
        `<meta\\s+property=(["'])(${managedMetaProperties.join("|").replace(/:/g, "\\:")})\\1[\\s\\S]*?>\\s*`,
        "gi",
      ),
      "",
    )
    .replace(/<link\s+rel=(["'])canonical\1[\s\S]*?>\s*/gi, "")
    .replace(/<link\s+rel=(["'])alternate\1[\s\S]*?>\s*/gi, "")
    .replace(/<script\s+id=(["'])portfolio-profile-jsonld\1[\s\S]*?<\/script>\s*/gi, "");
}

function setHtmlLanguage(html, languageTag) {
  return html.replace(/<html\b([^>]*)>/i, (_match, attributes) => {
    const nextAttributes = attributes.replace(/\s+lang=(["']).*?\1/i, "");
    return `<html${nextAttributes} lang="${escapeAttribute(languageTag)}">`;
  });
}

function createStructuredData(content, locale, canonicalUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonicalUrl}#profile-page`,
    url: canonicalUrl,
    name: content.seo.title,
    headline: content.profile.role,
    description: content.seo.description,
    inLanguage: localeMeta[locale].languageTag,
    mainEntity: {
      "@type": "Person",
      "@id": `${toUrl("/")}#angel-viejobueno`,
      name: content.profile.name,
      alternateName: ["AVR", "Angel Viejobueno"],
      url: canonicalUrl,
      sameAs: ["https://www.linkedin.com/in/angelviejobueno"],
      jobTitle: content.seo.jobTitle,
      description: content.profile.summary,
      knowsAbout: content.seo.keywords,
      skills: content.seo.keywords.join(", "),
    },
  };
}

function renderSeoTags(content, locale, options = {}) {
  const canonicalPathname = options.canonicalPathname ?? localePathnames[locale];
  const canonicalUrl = toUrl(canonicalPathname);
  const robots = options.robots ?? "index, follow, max-image-preview:large";
  const jsonLd = createStructuredData(content, locale, canonicalUrl);

  return [
    `<title>${escapeHtml(content.seo.title)}</title>`,
    `<meta name="description" content="${escapeAttribute(content.seo.description)}" />`,
    `<meta name="keywords" content="${escapeAttribute(content.seo.keywords.join(", "))}" />`,
    `<meta name="author" content="Ángel Viejobueno" />`,
    `<meta name="robots" content="${escapeAttribute(robots)}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:title" content="${escapeAttribute(content.seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(content.seo.description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(canonicalUrl)}" />`,
    `<meta property="og:site_name" content="Ángel Viejobueno Portfolio" />`,
    `<meta property="og:locale" content="${escapeAttribute(localeMeta[locale].ogLocale)}" />`,
    ...locales
      .filter((item) => item !== locale)
      .map(
        (item) =>
          `<meta property="og:locale:alternate" content="${escapeAttribute(localeMeta[item].ogLocale)}" />`,
      ),
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttribute(content.seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(content.seo.description)}" />`,
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
    `<link rel="alternate" hreflang="en" href="${escapeAttribute(toUrl(localePathnames.en))}" />`,
    `<link rel="alternate" hreflang="es" href="${escapeAttribute(toUrl(localePathnames.es))}" />`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttribute(toUrl(localePathnames.en))}" />`,
    `<script id="portfolio-profile-jsonld" type="application/ld+json">${escapeJsonScript(
      JSON.stringify(jsonLd),
    )}</script>`,
  ]
    .map((tag) => `    ${tag}`)
    .join("\n");
}

function renderPage(template, content, locale, options) {
  const languageTag = localeMeta[locale].languageTag;
  const html = removeManagedSeo(setHtmlLanguage(template, languageTag));
  return html.replace(/<\/head>/i, `${renderSeoTags(content, locale, options)}\n  </head>`);
}

function renderSitemap() {
  if (!siteUrl) {
    return "";
  }

  const urls = locales
    .map(
      (locale) => `  <url>
    <loc>${escapeHtml(toUrl(localePathnames[locale]))}</loc>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function appendSitemapToRobots() {
  if (!siteUrl) {
    return;
  }

  const robotsPath = path.join(distDir, "robots.txt");
  const sitemapLine = `Sitemap: ${siteUrl}/sitemap.xml`;
  const existing = await fs.readFile(robotsPath, "utf8").catch(() => "");
  const withoutOldSitemap = existing
    .split("\n")
    .filter((line) => !line.toLowerCase().startsWith("sitemap:"))
    .join("\n")
    .trimEnd();

  await fs.writeFile(robotsPath, `${withoutOldSitemap}\n\n${sitemapLine}\n`, "utf8");
}

async function main() {
  const [template, portfolioContent] = await Promise.all([
    fs.readFile(templatePath, "utf8"),
    loadPortfolioContent(),
  ]);

  await fs.writeFile(
    templatePath,
    renderPage(template, portfolioContent.en, "en", {
      canonicalPathname: localePathnames.en,
      robots: "noindex, follow",
    }),
    "utf8",
  );

  await Promise.all(
    locales.map(async (locale) => {
      const outputDir = path.join(distDir, locale);
      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(
        path.join(outputDir, "index.html"),
        renderPage(template, portfolioContent[locale], locale),
        "utf8",
      );
    }),
  );

  const sitemap = renderSitemap();
  if (sitemap) {
    await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
    await appendSitemapToRobots();
  }

  console.log(
    `SEO prerender complete: ${locales.map((locale) => localePathnames[locale]).join(", ")}${
      siteUrl ? ", sitemap.xml" : ""
    }`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
