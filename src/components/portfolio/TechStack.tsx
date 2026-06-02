import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Cable,
  Cloud,
  Code2,
  Database,
  Layers3,
  ServerCog,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

import type { PortfolioContent } from "@/data/portfolio";

import { SectionHeading } from "./SectionHeading";

type TechStackProps = {
  content: PortfolioContent;
};

const categoryIcons: LucideIcon[] = [
  ServerCog,
  Layers3,
  Cable,
  Database,
  Cloud,
  TestTube2,
  Bot,
  Code2,
];
const visibleSkillCount = 8;

const simpleIconBaseUrl = "https://cdn.simpleicons.org";
const simpleIconColor = "bdf47d";

const simpleIconSlugs: Record<string, string> = {
  ".net": "dotnet",
  ".net core": "dotnet",
  "asp.net": "dotnet",
  "asp.net core": "dotnet",
  "asp.net mvc": "dotnet",
  "autofac ioc container": "autofac",
  "aws": "amazonwebservices",
  "azure": "microsoftazure",
  "azure devops": "azuredevops",
  "bitbucket": "bitbucket",
  "c#": "csharp",
  "chroma": "chroma",
  "claude code": "anthropic",
  "codex": "openai",
  "docker": "docker",
  "dynamodb": "amazondynamodb",
  "entity framework": "dotnet",
  "entity framework core": "dotnet",
  "git": "git",
  "github": "github",
  "graphql": "graphql",
  "graphql hotchocolate": "graphql",
  "html": "html5",
  "ibm api connect": "ibm",
  "iis": "microsoft",
  "java": "openjdk",
  "javascript": "javascript",
  "jenkins": "jenkins",
  "kubernetes": "kubernetes",
  "mongodb": "mongodb",
  "moq": "nuget",
  "node.js": "nodedotjs",
  "nuget packages": "nuget",
  "openai api": "openai",
  "openshift": "redhatopenshift",
  "oracle database": "oracle",
  "postgresql": "postgresql",
  "python": "python",
  "qdrant": "qdrant",
  "rabbitmq": "rabbitmq",
  "redis": "redis",
  "resharper": "resharper",
  "rider": "rider",
  "semantic kernel": "microsoft",
  "serilog": "nuget",
  "sharepoint server": "microsoftsharepoint",
  "spring boot sts": "springboot",
  "sql server": "microsoftsqlserver",
  "tfs": "azuredevops",
  "tibco bw": "tibco",
  "unity ioc container": "unity",
  "visual studio .net": "visualstudio",
  "visual studio code": "visualstudiocode",
  "xunit framework": "nuget",
};

const skillMonograms: Record<string, string> = {
  "appfabric": "AF",
  "ci/cd": "CI",
  "clean architecture": "CA",
  "code analysis workflows": "AI",
  "cqrs": "CQ",
  "enterprise library": "EL",
  "event source": "ES",
  "linq": "LQ",
  "microservices": "MS",
  "msmq": "MQ",
  "oop": "OO",
  "opc": "OP",
  "patterns": "PT",
  "pl/sql": "PL",
  "prompt engineering": "PE",
  "rag": "RG",
  "restful services": "RS",
  "scada": "SC",
  "scrum": "SM",
  "soa": "SA",
  "solid": "SO",
  "t-sql": "TQ",
  "tdd": "TD",
  "unit test": "UT",
  "vector databases": "VD",
  "vertical slices": "VS",
  "wcf": "WF",
  "web api": "WA",
  "wwf": "WW",
  "xml": "XM",
  "xsd": "XS",
};

function getSimpleIconUrl(skill: string) {
  const slug = simpleIconSlugs[skill.toLowerCase()];
  return slug ? `${simpleIconBaseUrl}/${slug}/${simpleIconColor}` : undefined;
}

function getSkillMonogram(skill: string) {
  const normalizedSkill = skill.toLowerCase();
  const knownMonogram = skillMonograms[normalizedSkill];

  if (knownMonogram) {
    return knownMonogram;
  }

  return skill
    .replace(/[^a-zA-Z0-9\s.#]/g, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type SkillLogoProps = {
  name: string;
};

function SkillLogo({ name }: SkillLogoProps) {
  const [failed, setFailed] = useState(false);
  const simpleIconUrl = failed ? undefined : getSimpleIconUrl(name);

  if (simpleIconUrl) {
    return (
      <img
        src={simpleIconUrl}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-4 w-4 shrink-0 object-contain opacity-95"
      />
    );
  }

  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] border border-[#bdf47d]/35 bg-[#bdf47d]/10 text-[0.52rem] font-bold leading-none text-[#bdf47d]">
      {getSkillMonogram(name)}
    </span>
  );
}

export function TechStack({ content }: TechStackProps) {
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  return (
    <section
      id="tech-stack"
      className="scroll-mt-28 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={content.techStack.eyebrow}
              title={content.techStack.title}
              description={content.techStack.description}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.techStack.groups.map((group, index) => {
              const Icon = categoryIcons[index] ?? ServerCog;
              const expanded = expandedGroups[group.title] ?? false;
              const visibleItems = expanded
                ? group.items
                : group.items.slice(0, visibleSkillCount);
              const hiddenCount = group.items.length - visibleItems.length;

              return (
                <article
                  key={group.title}
                  className="rounded-lg border border-white/10 bg-[rgba(255,255,255,0.035)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[#bdf47d]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                        <p className="mt-1 text-sm text-white/42">
                          {group.items.length} {content.techStack.countLabel}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {visibleItems.map((item) => {
                      return (
                        <span
                          key={item}
                          className="inline-flex max-w-full items-center gap-2 rounded-md border border-white/10 bg-[#0a1713] px-3 py-2 text-sm font-medium text-white/74"
                        >
                          <SkillLogo name={item} />
                          <span className="min-w-0 break-words">{item}</span>
                        </span>
                      );
                    })}
                  </div>

                  {hiddenCount > 0 || expanded ? (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedGroups((current) => ({
                          ...current,
                          [group.title]: !expanded,
                        }))
                      }
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#bdf47d] transition hover:text-[#d7ff9c]"
                    >
                      {expanded
                        ? content.techStack.lessLabel
                        : `${content.techStack.moreLabel} +${hiddenCount}`}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
