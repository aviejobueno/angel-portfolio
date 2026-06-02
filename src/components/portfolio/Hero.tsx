import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PortfolioContent } from "@/data/portfolio";

type HeroProps = {
  content: PortfolioContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#06110d_0%,#07120f_54%,#050908_100%)]" />
      <div className="hero-grid absolute inset-0 -z-10 opacity-35" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:py-16">
          <div>
            <p className="text-sm font-medium text-white/52">
              {content.hero.titlePrefix}
            </p>

            <h1 className="mt-5 max-w-4xl break-words font-['Manrope'] text-[clamp(2.65rem,12vw,4.5rem)] font-extrabold leading-none text-white sm:text-6xl lg:text-7xl">
              {content.profile.name}
            </h1>

            <div className="mt-8 max-w-4xl">
              <p className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                {content.hero.titleMain}
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug text-[#bdf47d] sm:text-2xl lg:text-3xl">
                {content.hero.titleAccent}
              </p>
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
              {content.profile.summary}
            </p>

            <div className="mt-8 h-px w-56 bg-[linear-gradient(90deg,#7df45f,rgba(125,244,95,0))]" />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-12 w-full justify-center rounded-md border border-[#bdf47d]/35 bg-[#bdf47d] px-6 text-base font-semibold text-[#08110d] shadow-none transition hover:bg-[#d6ff99] sm:w-auto"
              >
                <a href={content.profile.primaryCta.href}>
                  {content.profile.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full justify-center rounded-md border-white/14 bg-white/[0.04] px-6 text-base font-semibold text-white/88 transition hover:border-white/24 hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                <a href={content.profile.skillsCta.href}>
                  {content.profile.skillsCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full justify-center rounded-md border-white/14 bg-white/[0.04] px-6 text-base font-semibold text-white/88 transition hover:border-white/24 hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                <a href={content.profile.secondaryCta.href} download>
                  <Download className="h-4 w-4" />
                  {content.profile.secondaryCta.label}
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full justify-center rounded-md border-white/14 bg-white/[0.04] px-6 text-base font-semibold text-white/88 transition hover:border-white/24 hover:bg-white/[0.08] hover:text-white sm:w-auto"
              >
                <a href={content.profile.tertiaryCta.href}>{content.profile.tertiaryCta.label}</a>
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 lg:border-l lg:bg-transparent lg:pl-8">
            <div className="space-y-5">
              {content.hero.metrics.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/56">{item.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
