import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type PrinciplesProps = {
  content: PortfolioContent;
};

export function Principles({ content }: PrinciplesProps) {
  return (
    <section id="principles" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.principles.eyebrow}
          title={content.principles.title}
          description={content.principles.description}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {content.principles.items.map((item) => (
            <article
              key={item.title}
              className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(132,255,88,0.28)]"
            >
              <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[rgba(132,255,88,0.9)]">
                {item.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/68 sm:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
