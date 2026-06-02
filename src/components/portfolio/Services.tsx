import { iconMap } from "@/components/portfolio/icon-map";
import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type ServicesProps = {
  content: PortfolioContent;
};

export function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.services.eyebrow}
          title={content.services.title}
          description={content.services.description}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.services.items.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.title}
                className="rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.028)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(132,255,88,0.28)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[rgba(132,255,88,0.9)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
