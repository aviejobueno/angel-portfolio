import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Expertise } from "@/components/portfolio/Expertise";
import { Footer } from "@/components/portfolio/Footer";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Principles } from "@/components/portfolio/Principles";
import { Pymes } from "@/components/portfolio/Pymes";
import { Services } from "@/components/portfolio/Services";
import { TechStack } from "@/components/portfolio/TechStack";
import { portfolioContent, type Locale, type PortfolioContent } from "@/data/portfolio";
import {
  getLocaleFromPath,
  getPreferredLocale,
  localeMeta,
  localePathnames,
} from "@/lib/i18n";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setCanonicalLink(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function setAlternateLink(hreflang: string, href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    `link[rel="alternate"][hreflang="${hreflang}"]`,
  );

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "alternate");
    link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function setStructuredData(content: PortfolioContent, locale: Locale, canonicalUrl: string) {
  const personId = `${window.location.origin}/#angel-viejobueno`;
  const jsonLd = {
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
      "@id": personId,
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

  let script = document.head.querySelector<HTMLScriptElement>("#portfolio-profile-jsonld");

  if (!script) {
    script = document.createElement("script");
    script.id = "portfolio-profile-jsonld";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(jsonLd);
}

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPath(location.pathname) ?? getPreferredLocale();
  const content = portfolioContent[locale];

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${localePathnames[locale]}`;

    document.title = content.seo.title;
    document.documentElement.lang = locale;
    window.localStorage.setItem("portfolio-locale", locale);

    setMeta("name", "description", content.seo.description);
    setMeta("name", "keywords", content.seo.keywords.join(", "));
    setMeta("name", "author", "Ángel Viejobueno");
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("property", "og:type", "profile");
    setMeta("property", "og:title", content.seo.title);
    setMeta("property", "og:description", content.seo.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", "Ángel Viejobueno Portfolio");
    setMeta("property", "og:locale", localeMeta[locale].ogLocale);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", content.seo.title);
    setMeta("name", "twitter:description", content.seo.description);

    document.head
      .querySelectorAll('meta[property="og:locale:alternate"][data-portfolio-seo="true"]')
      .forEach((element) => element.remove());

    (["en", "es"] as const)
      .filter((item) => item !== locale)
      .forEach((item) => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:locale:alternate");
        meta.setAttribute("content", localeMeta[item].ogLocale);
        meta.setAttribute("data-portfolio-seo", "true");
        document.head.appendChild(meta);
      });

    setCanonicalLink(canonicalUrl);
    setAlternateLink("en", `${origin}${localePathnames.en}`);
    setAlternateLink("es", `${origin}${localePathnames.es}`);
    setAlternateLink("x-default", `${origin}${localePathnames.en}`);
    setStructuredData(content, locale, canonicalUrl);
  }, [content, locale]);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale !== locale) {
      navigate(`${localePathnames[nextLocale]}${location.hash}`);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[rgb(5,9,8)] text-white">
      <div className="page-noise pointer-events-none fixed inset-0 -z-10 opacity-[0.16]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(132,255,88,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(132,255,88,0.08),transparent_28%)]" />

      <Header locale={locale} content={content} onLocaleChange={handleLocaleChange} />

      <main>
        <Hero content={content} />
        <About content={content} />
        <Expertise content={content} />
        <Experience content={content} />
        <Principles content={content} />
        <TechStack content={content} />
        <Pymes content={content} />
        <Services content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
};

export default Index;
