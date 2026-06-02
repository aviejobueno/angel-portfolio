import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/portfolio/BrandMark";
import { localeLabels, type Locale, type PortfolioContent } from "@/data/portfolio";

const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
};

type HeaderProps = {
  locale: Locale;
  content: PortfolioContent;
  onLocaleChange: (locale: Locale) => void;
};

export function Header({ locale, content, onLocaleChange }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(7,12,10,0.78)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6">
        <a href="#top" aria-label="Go to top" className="shrink-0">
          <BrandMark compact />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {content.navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/62 transition hover:text-[rgba(132,255,88,0.92)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end lg:flex">
          <div
            className="flex items-center rounded-full border border-white/10 bg-white/5 p-1"
            role="group"
            aria-label="Language selector"
          >
            {(["en", "es"] as const).map((item) => {
              const active = item === locale;

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  onClick={() => onLocaleChange(item)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    active
                      ? "bg-[rgba(132,255,88,0.2)] text-white"
                      : "text-white/52 hover:text-white"
                  }`}
                >
                  {item === "en" && (
                    <span className="text-[0.8rem] leading-none" aria-hidden="true">
                      {localeFlags[item]}
                    </span>
                  )}
                  <span>{localeLabels[item]}</span>
                  {item === "es" && (
                    <span className="text-[0.8rem] leading-none" aria-hidden="true">
                      {localeFlags[item]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-h-[calc(100vh-6.5rem)] max-w-7xl overflow-y-auto rounded-3xl border border-white/10 bg-[rgba(8,13,11,0.96)] p-4 shadow-[0_24px_64px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:hidden">
          <div className="mb-3 flex items-center rounded-full border border-white/10 bg-white/5 p-1">
            {(["en", "es"] as const).map((item) => {
              const active = item === locale;

              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    onLocaleChange(item);
                    setOpen(false);
                  }}
                  className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    active
                      ? "bg-[rgba(132,255,88,0.2)] text-white"
                      : "text-white/52 hover:text-white"
                  }`}
                >
                  {item === "en" && (
                    <span className="text-[0.8rem] leading-none" aria-hidden="true">
                      {localeFlags[item]}
                    </span>
                  )}
                  <span>{localeLabels[item]}</span>
                  {item === "es" && (
                    <span className="text-[0.8rem] leading-none" aria-hidden="true">
                      {localeFlags[item]}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <nav className="flex flex-col gap-1">
            {content.navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/72 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={content.profile.secondaryCta.href}
              download
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl border border-[rgba(132,255,88,0.28)] bg-[rgba(132,255,88,0.14)] px-4 py-3 text-sm font-medium text-white transition hover:bg-[rgba(132,255,88,0.2)]"
            >
              {content.profile.secondaryCta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
