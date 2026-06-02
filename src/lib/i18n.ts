import type { Locale } from "@/data/portfolio";

export const localePathnames: Record<Locale, string> = {
  en: "/en/",
  es: "/es/",
};

export const localeMeta: Record<Locale, { ogLocale: string; languageTag: string }> = {
  en: { ogLocale: "en_GB", languageTag: "en" },
  es: { ogLocale: "es_ES", languageTag: "es-ES" },
};

export function getLocaleFromPath(pathname: string): Locale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment === "en" || firstSegment === "es" ? firstSegment : null;
}

export function getPreferredLocale(): Locale {
  if (typeof window === "undefined") {
    return "en";
  }

  const pathLocale = getLocaleFromPath(window.location.pathname);
  if (pathLocale) {
    return pathLocale;
  }

  const storedLocale = window.localStorage.getItem("portfolio-locale");
  if (storedLocale === "en" || storedLocale === "es") {
    return storedLocale;
  }

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}
