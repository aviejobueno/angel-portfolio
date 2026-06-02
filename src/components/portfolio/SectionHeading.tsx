type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(132,255,88,0.82)]">
        {eyebrow}
      </p>
      <h2 className="break-words text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-white/64 sm:text-lg">
        {description}
      </p>
      <div className="mt-6 h-px w-28 rounded-full bg-[linear-gradient(90deg,rgba(132,255,88,0.8),rgba(132,255,88,0))]" />
    </div>
  );
}
