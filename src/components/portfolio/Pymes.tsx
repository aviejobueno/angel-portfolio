import { BrainCircuit, FileSearch, Rocket, Workflow } from "lucide-react";

import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type PymesProps = {
  content: PortfolioContent;
};

const outcomeIcons = [Rocket, BrainCircuit, Workflow];

export function Pymes({ content }: PymesProps) {
  return (
    <section
      id="pymes"
      className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={content.pymes.eyebrow}
              title={content.pymes.title}
              description={content.pymes.description}
            />

          </div>

          <div>
            <p className="text-xs font-semibold uppercase text-white/42">
              {content.pymes.outcomesTitle}
            </p>

            <div className="mt-5 grid gap-3">
              {content.pymes.outcomes.map((outcome, index) => {
                const Icon = outcomeIcons[index] ?? BrainCircuit;

                return (
                  <article
                    key={outcome.value}
                    className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[#bdf47d]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{outcome.value}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/62">{outcome.label}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase text-white/42">
            {content.pymes.useCasesTitle}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {content.pymes.useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="rounded-lg border border-white/10 bg-[#0a1713] p-5"
              >
                <FileSearch className="h-5 w-5 text-[#bdf47d]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{useCase.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
