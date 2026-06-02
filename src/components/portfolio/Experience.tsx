import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type ExperienceProps = {
  content: PortfolioContent;
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.experience.eyebrow}
          title={content.experience.title}
          description={content.experience.description}
        />

        <div className="mt-10 space-y-4">
          {content.experience.items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.028] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:grid-cols-[120px_1fr] lg:gap-8 lg:p-8"
            >
              <div className="flex items-start lg:justify-center">
                <div className="inline-flex rounded-full border border-[rgba(132,255,88,0.2)] bg-[rgba(132,255,88,0.1)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(132,255,88,0.86)]">
                  0{index + 1}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                  {item.summary}
                </p>
                <div className="mt-5 grid gap-3 lg:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-[1.4rem] border border-white/8 bg-[rgba(255,255,255,0.026)] p-4 text-sm leading-7 text-white/62"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
