import { useCallback, useEffect, useRef, useState } from "react";
import s1 from "@/assets/srk/srk-1.png";
import s2 from "@/assets/srk/srk-2.jpg";
import s3 from "@/assets/srk/srk-3.jpg";
import s4 from "@/assets/srk/srk-4.jpg";
import s5 from "@/assets/srk/srk-5.jpg";
import s6 from "@/assets/srk/srk-6.jpg";
import s7 from "@/assets/srk/srk-7.jpg";
import s8 from "@/assets/srk/srk-8.jpg";

const slides = [
  { src: s2, caption: "Dunki — Desert Saga" },
  { src: s3, caption: "Mannat — At Home" },
  { src: s1, caption: "Pathaan — Behind The Scenes" },
  { src: s4, caption: "Live Stage Appearance" },
  { src: s5, caption: "Met Gala 2023 — New York" },
  { src: s6, caption: "Met Gala — Red Carpet" },
  { src: s7, caption: "Public Appearance — Mumbai" },
  { src: s8, caption: "Fan Event — Worldwide Tour" },
];

/**
 * 3D coverflow-style carousel with live finger tracking,
 * tap-to-open lightbox, and full keyboard support.
 */
export function Srk3DCarousel() {
  const total = slides.length;
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0); // -1..1 fractional offset during drag
  const [lightbox, setLightbox] = useState<number | null>(null);

  const startX = useRef<number | null>(null);
  const startY = useRef(0);
  const lockedAxis = useRef<"x" | "y" | null>(null);
  const stageWidth = useRef(0);
  const pausedRef = useRef(false);
  const movedRef = useRef(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  // Preload neighbor images (prev/next) so swipes feel instant on slow networks.
  useEffect(() => {
    const neighbors = [
      (active - 1 + total) % total,
      (active + 1) % total,
      (active + 2) % total,
    ];
    const links: HTMLLinkElement[] = neighbors.map((i) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = slides[i].src;
      // Hint to the browser these are coming up imminently.
      link.setAttribute("fetchpriority", "high");
      document.head.appendChild(link);
      return link;
    });
    return () => {
      links.forEach((l) => l.parentNode?.removeChild(l));
    };
  }, [active, total]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current && lightbox === null) {
        setActive((a) => (a + 1) % total);
      }
    }, 4200);
    return () => clearInterval(id);
  }, [total, lightbox]);

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + total) % total),
    [total],
  );

  // --- Drag handling (live tracking) ---
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    lockedAxis.current = null;
    movedRef.current = false;
    stageWidth.current = stageRef.current?.offsetWidth ?? window.innerWidth;
    pausedRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    if (!lockedAxis.current) {
      if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
        lockedAxis.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }
    }
    if (lockedAxis.current === "x") {
      movedRef.current = true;
      // Normalize to fraction of one card-width's worth of slide travel.
      const cardSpacing = stageWidth.current * 0.55;
      setDrag(Math.max(-1.2, Math.min(1.2, dx / cardSpacing)));
    }
  };
  const onPointerUp = () => {
    if (lockedAxis.current === "x") {
      if (drag > 0.25) go(-1);
      else if (drag < -0.25) go(1);
    }
    setDrag(0);
    startX.current = null;
    lockedAxis.current = null;
    setTimeout(() => (pausedRef.current = false), 1500);
  };

  const handleCardClick = (i: number) => {
    if (movedRef.current) return; // it was a drag, not a tap
    if (i === active) setLightbox(i);
    else setActive(i);
  };

  // --- Lightbox keyboard + body lock ---
  useEffect(() => {
    if (lightbox === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % total));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, total]);

  return (
    <section
      className="relative overflow-hidden border-t border-foreground/10 bg-foreground/[0.03] px-4 py-14 sm:px-10 sm:py-24"
      aria-labelledby="srk-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-foreground/50 sm:text-xs">
          Gallery · 3D Coverflow
        </p>
        <h2
          id="srk-gallery-heading"
          className="font-display text-[clamp(1.6rem,5vw,3.25rem)] font-bold leading-[1.05]"
        >
          Shah Rukh Khan — In Frame
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-foreground/65 sm:mt-4 sm:text-base">
          A glimpse of SRK across films, red carpets and live events. Swipe to
          browse — tap any image for fullscreen view.
        </p>

        <div
          ref={stageRef}
          className="relative mt-8 h-[300px] touch-pan-y select-none sm:mt-12 sm:h-[460px] md:h-[520px]"
          style={{ perspective: "1200px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
            {slides.map((slide, i) => {
              let offset = i - active - drag;
              // Wrap to shortest path
              const half = total / 2;
              if (offset > half) offset -= total;
              if (offset < -half) offset += total;
              const abs = Math.abs(offset);
              const visible = abs <= 2.5;
              const translateX = offset * 55; // % of card width
              const translateZ = -Math.min(abs, 3) * 160;
              const rotateY = Math.max(-45, Math.min(45, offset * -28));
              const opacity = visible ? Math.max(0, 1 - abs * 0.35) : 0;
              const z = 100 - Math.round(abs * 10);
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-[260px] w-[180px] cursor-pointer will-change-transform sm:h-[400px] sm:w-[280px] md:h-[460px] md:w-[320px]"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                    transition: drag === 0 ? "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 400ms" : "opacity 200ms",
                    opacity,
                    zIndex: z,
                    pointerEvents: visible ? "auto" : "none",
                  }}
                  onClick={() => handleCardClick(i)}
                  role="button"
                  aria-label={`${slide.caption} — open fullscreen`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-foreground/10 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.45)] ring-1 ring-foreground/10">
                    <img
                      src={slide.src}
                      alt={`Shah Rukh Khan — ${slide.caption}`}
                      className="h-full w-full object-cover"
                      draggable={false}
                      loading={abs <= 2 ? "eager" : "lazy"}
                      fetchPriority={abs === 0 ? "high" : abs <= 1 ? "auto" : "low"}
                      decoding="async"
                    />
                    {Math.round(offset) === 0 && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 sm:p-4">
                        <p className="font-display text-xs font-semibold text-white sm:text-base">
                          {slide.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            ←
          </button>
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-foreground" : "w-1.5 bg-foreground/30"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/20 bg-background text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            →
          </button>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </section>
  );
}

function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const total = slides.length;
  const startX = useRef<number | null>(null);
  const slide = slides[index];

  // Preload neighboring lightbox images for instant swipe.
  useEffect(() => {
    const neighbors = [
      (index - 1 + total) % total,
      (index + 1) % total,
    ];
    const links = neighbors.map((i) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = slides[i].src;
      document.head.appendChild(link);
      return link;
    });
    return () => links.forEach((l) => l.parentNode?.removeChild(l));
  }, [index, total]);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 50) {
      onChange(dx < 0 ? (index + 1) % total : (index - 1 + total) % total);
    }
    startX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Shah Rukh Khan — ${slide.caption}`}
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-xl backdrop-blur-md transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        ✕
      </button>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-10"
        onClick={(e) => e.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <button
          type="button"
          aria-label="Previous"
          onClick={() => onChange((index - 1 + total) % total)}
          className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white text-2xl backdrop-blur-md transition-colors hover:bg-white/20 sm:inline-flex sm:left-6"
        >
          ←
        </button>
        <img
          src={slide.src}
          alt={`Shah Rukh Khan — ${slide.caption}`}
          className="max-h-full max-w-full select-none object-contain"
          draggable={false}
        />
        <button
          type="button"
          aria-label="Next"
          onClick={() => onChange((index + 1) % total)}
          className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white text-2xl backdrop-blur-md transition-colors hover:bg-white/20 sm:inline-flex sm:right-6"
        >
          →
        </button>
      </div>

      <div
        className="flex shrink-0 items-center justify-between gap-3 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 text-white sm:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-sm font-semibold sm:text-base">
          {slide.caption}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => onChange((index - 1 + total) % total)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:hidden"
          >
            ←
          </button>
          <p className="text-xs tabular-nums text-white/70 sm:text-sm">
            {index + 1} / {total}
          </p>
          <button
            type="button"
            aria-label="Next"
            onClick={() => onChange((index + 1) % total)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:hidden"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}