import { ArrowUpRight, Linkedin } from "lucide-react";

import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  content: PortfolioContent;
};

export function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={content.contact.title}
            description={content.contact.description}
          />

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {content.contact.linkedinIntro}
            </p>

            <div className="mt-6 grid gap-3">
              {content.contact.links.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(132,255,88,0.28)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[rgba(132,255,88,0.2)] bg-[rgba(132,255,88,0.1)] text-[rgba(132,255,88,0.94)]">
                        <Linkedin className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                          {link.label}
                        </p>
                        <p className="mt-1 truncate text-sm text-white/76 sm:text-base">
                          {link.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/48 transition group-hover:text-white/80" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
