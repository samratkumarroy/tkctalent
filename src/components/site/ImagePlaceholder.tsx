type Props = {
  label: string;
  recommendation: string;
  ratio?: string;
  className?: string;
};

export function ImagePlaceholder({ label, recommendation, ratio = "aspect-[4/3]", className = "" }: Props) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden border border-dashed border-foreground/25 bg-foreground/[0.04] ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/50">
          Image placeholder
        </span>
        <span className="font-display text-base font-semibold text-foreground/80 sm:text-lg">
          {label}
        </span>
        <span className="max-w-xs text-xs leading-relaxed text-foreground/55">
          {recommendation}
        </span>
      </div>
    </div>
  );
}
