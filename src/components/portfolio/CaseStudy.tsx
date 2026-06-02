import { ArrowUpRight } from "lucide-react";

import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type CaseStudyProps = {
  content: PortfolioContent;
};

export function CaseStudy({ content }: CaseStudyProps) {
  return (
    <section id="case-study" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow={content.caseStudy.eyebrow}
              title={content.caseStudy.title}
              description={content.caseStudy.intro}
            />

            <div className="mt-8 rounded-[1.8rem] border border-[rgba(132,255,88,0.2)] bg-[rgba(132,255,88,0.08)] p-5 sm:p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[rgba(132,255,88,0.86)]">
                <span>{content.caseStudy.mapTitle}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(5,9,8,0.5)] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                    {content.caseStudy.legacyTitle}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {content.caseStudy.legacyText}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="h-10 w-px bg-[linear-gradient(180deg,rgba(132,255,88,0),rgba(132,255,88,0.92),rgba(132,255,88,0))]" />
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[rgba(5,9,8,0.5)] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                    {content.caseStudy.targetTitle}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {content.caseStudy.targetText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {content.caseStudy.pillars.map((pillar) => (
                <article
                  key={pillar.label}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(132,255,88,0.86)]">
                    {pillar.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/66">{pillar.text}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.026)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/44">
                {content.caseStudy.valueTitle}
              </p>
              <ul className="mt-4 space-y-3">
                {content.caseStudy.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="rounded-[1.2rem] border border-white/8 bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm leading-7 text-white/66"
                  >
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
