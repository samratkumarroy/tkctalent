import { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
  eager?: boolean;
};

/**
 * Image with a shimmering skeleton placeholder + native lazy/async loading.
 * Keeps the gallery feeling fast while heavy portrait PNGs decode.
 */
export function SmartImage({
  containerClassName = "",
  eager = false,
  className = "",
  onLoad,
  ...rest
}: Props) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(110deg, oklch(0.92 0 0) 8%, oklch(0.96 0 0) 18%, oklch(0.92 0 0) 33%)",
          backgroundSize: "200% 100%",
          animation: "tkc-shimmer 1.6s linear infinite",
        }}
      />
      <img
        {...rest}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
      <style>{`@keyframes tkc-shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
    </div>
  );
}