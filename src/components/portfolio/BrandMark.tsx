type BrandMarkProps = {
  compact?: boolean;
  heroSize?: boolean;
};

export function BrandMark({ compact = false, heroSize = false }: BrandMarkProps) {
  const sizeClass = heroSize ? "gap-5 sm:gap-6" : "gap-3";

  const frameClass = heroSize
    ? "h-16 w-16 rounded-[1.8rem] sm:h-20 sm:w-20"
    : "h-11 w-11 rounded-2xl";

  const dotClass = heroSize
    ? "left-3 top-3 h-2.5 w-2.5 sm:left-3.5 sm:top-3.5"
    : "left-2 top-2 h-1.5 w-1.5";

  const lineClass = heroSize
    ? "right-3 top-4 w-5 sm:right-3.5 sm:top-5 sm:w-6"
    : "right-2 top-3 w-3";

  const cornerDotClass = heroSize
    ? "bottom-3 right-3 h-2.5 w-2.5 sm:bottom-3.5 sm:right-3.5"
    : "bottom-2 right-2 h-1.5 w-1.5";

  const monogramClass = heroSize
    ? "text-[1.15rem] font-semibold tracking-[-0.04em] sm:text-[1.4rem]"
    : "text-[0.72rem] font-semibold tracking-[-0.04em]";
  const nameClass = heroSize
    ? "text-2xl font-medium tracking-[0.06em] text-[rgba(132,255,88,0.9)] sm:text-4xl"
    : "text-sm font-medium tracking-[0.08em] text-[rgba(132,255,88,0.82)]";
  const subtitleClass = heroSize
    ? "mt-1 text-lg text-white/64 sm:text-2xl"
    : "text-sm text-white/60";

  return (
    <div className={`flex items-center ${sizeClass}`}>
      <div
        className={`relative flex items-center justify-center overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_0_0_1px_rgba(132,255,88,0.08),0_12px_32px_rgba(0,0,0,0.28)] ${frameClass}`}
      >
        <span
          className={`absolute rounded-full bg-[rgba(132,255,88,0.96)] ${dotClass}`}
        />
        <span
          className={`absolute h-px rounded-full bg-[rgba(132,255,88,0.55)] ${lineClass}`}
        />
        <span className={`absolute rounded-full bg-[#ffd84d] ${cornerDotClass}`} />
        <span className={`select-none font-['Manrope'] leading-none text-white ${monogramClass}`}>
          AVR
        </span>
      </div>
      {!compact && (
        <div>
          <p className={nameClass}>Ángel Viejobueno</p>
          <p className={subtitleClass}>Senior .NET Developer portfolio</p>
        </div>
      )}
    </div>
  );
}
