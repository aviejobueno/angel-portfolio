import { BrandMark } from "@/components/portfolio/BrandMark";
import type { PortfolioContent } from "@/data/portfolio";

type FooterProps = {
  content: PortfolioContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.025)] px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <BrandMark compact />
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/58">{content.profile.role}</p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:items-end">
          {content.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm font-medium text-white/62 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <span className="text-sm text-white/36">© {new Date().getFullYear()} Ángel Viejobueno</span>
        </div>
      </div>
    </footer>
  );
}
