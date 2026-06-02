import { ArrowUpRight } from "lucide-react";

import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type ProjectsProps = {
  content: PortfolioContent;
};

export function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          description={content.projects.description}
        />

        <div className="mt-10 grid gap-4 xl:grid-cols-2">
          {content.projects.items.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.9rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(132,255,88,0.82)]">
                    {content.projects.featuredLabel}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 text-white/64">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/66">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.026)] px-3 py-1.5 text-xs font-medium text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/8 bg-[rgba(255,255,255,0.024)] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                    {content.projects.problemTitle}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/66">{project.problem}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/8 bg-[rgba(255,255,255,0.024)] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                    {content.projects.valueTitle}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/66">{project.value}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/72 transition hover:border-[rgba(132,255,88,0.28)] hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
