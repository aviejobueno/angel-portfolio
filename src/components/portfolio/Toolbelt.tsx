import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type ToolbeltProps = {
  content: PortfolioContent;
};

export function Toolbelt({ content }: ToolbeltProps) {
  const loopedItems = [...content.toolbelt.items, ...content.toolbelt.items];

  return (
    <section id="toolbelt" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.toolbelt.eyebrow}
          title={content.toolbelt.title}
          description={content.toolbelt.description}
        />

        <div className="marquee-fade mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
          <div className="marquee-track flex w-max gap-3">
            {loopedItems.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-white/10 bg-[rgba(5,9,8,0.68)] px-4 py-2 text-sm font-medium text-white/74"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
