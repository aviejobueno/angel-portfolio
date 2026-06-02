import { iconMap } from "@/components/portfolio/icon-map";
import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type ExpertiseProps = {
  content: PortfolioContent;
};

export function Expertise({ content }: ExpertiseProps) {
  return (
    <section id="expertise" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.expertise.eyebrow}
          title={content.expertise.title}
          description={content.expertise.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.expertise.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className="group rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.028)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(132,255,88,0.28)] hover:bg-[rgba(255,255,255,0.04)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(132,255,88,0.2)] bg-[rgba(132,255,88,0.1)] text-[rgba(132,255,88,0.96)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
