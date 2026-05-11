import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  imgClassName?: string;
  loading?: "eager" | "lazy";
  fallbackLabel?: string;
  sizes?: string;
  fetchPriority?: "high" | "low" | "auto";
};

/**
 * Image with graceful fallback. If the asset is missing or fails to load,
 * shows a labelled placeholder block instead of a broken image icon.
 */
export function SafeImage({
  src,
  alt,
  ratio = "aspect-[4/3]",
  className = "",
  imgClassName = "absolute inset-0 h-full w-full object-cover",
  loading = "lazy",
  fallbackLabel,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px",
  fetchPriority,
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden bg-foreground/[0.04] ${className}`}
      role="img"
      aria-label={alt}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          sizes={sizes}
          fetchPriority={fetchPriority}
          className={imgClassName}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/50">
            Image unavailable
          </span>
          <span className="font-display text-base font-semibold text-foreground/80 sm:text-lg">
            {fallbackLabel ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}