import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  content: PortfolioContent;
};

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <SectionHeading
          eyebrow={content.about.eyebrow}
          title={content.about.title}
          description={content.about.description}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {content.about.highlights.map((item) => (
            <article
              key={item}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(132,255,88,0.28)] hover:bg-white/[0.04]"
            >
              <div className="mb-4 h-1.5 w-14 rounded-full bg-[rgba(132,255,88,0.82)] transition group-hover:w-20" />
              <p className="text-sm leading-7 text-white/70 sm:text-[0.97rem]">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
