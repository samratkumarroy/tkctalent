import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const modules = import.meta.glob("@/assets/celebrities-carousel/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const portraits = Object.keys(modules)
  .sort((a, b) => {
    const na = parseInt(a.match(/c-(\d+)\.png/)?.[1] ?? "0", 10);
    const nb = parseInt(b.match(/c-(\d+)\.png/)?.[1] ?? "0", 10);
    return na - nb;
  })
  .map((k) => modules[k]);

/**
 * Curved continuous carousel for celebrity portraits.
 * Mirrors the home page CurvedHeroCarousel behaviour.
 */
export function CelebrityCarousel() {
  const total = portraits.length;
  const span = Math.PI * 3;
  const radiusY = 60;
  const radiusX = 48;

  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastWindowYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastWindowYRef.current = window.scrollY;
    const baseDrift = 0.0025;
    const tick = () => {
      offsetRef.current += baseDrift + velocityRef.current;
      velocityRef.current *= 0.92;
      setOffset(offsetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      const dy = window.scrollY - lastWindowYRef.current;
      lastWindowYRef.current = window.scrollY;
      if (inView) velocityRef.current += dy * 0.006;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onWheel = (e: React.WheelEvent) => {
    velocityRef.current += e.deltaY * 0.003;
  };
  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = lastXRef.current - e.clientX;
    velocityRef.current += dx * 0.008;
    lastXRef.current = e.clientX;
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const nudge = (dir: 1 | -1) => {
    // Snap-step ~1 portrait by overriding offset directly so it feels responsive.
    offsetRef.current += dir;
    velocityRef.current = 0;
    setOffset(offsetRef.current);
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nudge(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nudge(-1);
    }
  };

  return (
    <section
      className="relative w-full bg-background py-16 sm:py-24"
      aria-labelledby="celebrity-carousel-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 mb-10 sm:mb-14">
        <h2
          id="celebrity-carousel-heading"
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground"
        >
          Bollywood Celebrities We Book
        </h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          A curated roster of A-list actors, actresses, singers and pan-India stars —
          available through TKC Talent for events, weddings and brand campaigns.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <button
          type="button"
          aria-label="Previous celebrity"
          onClick={() => nudge(-1)}
          className="absolute left-3 top-1/2 z-30 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md ring-1 ring-foreground/10 backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:left-6 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next celebrity"
          onClick={() => nudge(1)}
          className="absolute right-3 top-1/2 z-30 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md ring-1 ring-foreground/10 backdrop-blur transition hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground sm:right-6 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div
          ref={containerRef}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
          tabIndex={0}
          className="relative mx-auto w-full max-w-[1600px] h-[340px] sm:h-[420px] md:h-[480px] select-none touch-pan-y cursor-grab active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          role="region"
          aria-roledescription="carousel"
          aria-label="Bollywood celebrities carousel"
        >
          {portraits.map((src, i) => {
            const pos = ((i - offset) % total + total) % total;
            const t = pos > total / 2 ? pos - total : pos;
            const n = t / (total / 2);
            const angle = n * (span / 2);
            const x = Math.sin(angle) * radiusX;
            const y = (1 - Math.cos(angle)) * radiusY;
            const rotate = angle * (180 / Math.PI) * 0.35;
            const absN = Math.abs(n);
            const scale = 1 - Math.min(absN * 0.25, 0.35);
            const opacity = absN < 0.55 ? 1 : Math.max(0, 1 - (absN - 0.55) / 0.4);
            const z = Math.round(100 - absN * 100);

            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 will-change-transform"
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}vw) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
                  zIndex: z,
                  opacity,
                  pointerEvents: opacity > 0.1 ? "auto" : "none",
                }}
              >
                <div className="w-[150px] h-[200px] sm:w-[180px] sm:h-[240px] md:w-[220px] md:h-[290px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/5 bg-muted">
                  <img
                    src={src}
                    alt={`Bollywood celebrity ${i + 1}`}
                    loading={i < 5 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 220px"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 flex max-w-md flex-col items-center gap-2 px-6 sm:mt-10">
        <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full rounded-full bg-foreground transition-[width] duration-150 ease-out"
            style={{
              width: `${((((Math.round(offset) % total) + total) % total) / Math.max(total - 1, 1)) * 100}%`,
            }}
          />
        </div>
        <p
          className="text-xs tabular-nums text-foreground/60"
          aria-live="polite"
        >
          {(((Math.round(offset) % total) + total) % total) + 1}
          <span className="mx-1">/</span>
          {total}
        </p>
      </div>
    </section>
  );
}