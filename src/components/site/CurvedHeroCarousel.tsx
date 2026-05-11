import { useEffect, useRef, useState } from "react";
import p1 from "@/assets/talent/talent-1.png";
import p2 from "@/assets/talent/talent-2.png";
import p3 from "@/assets/talent/talent-3.png";
import p4 from "@/assets/talent/talent-4.png";
import p5 from "@/assets/talent/talent-5.png";
import p6 from "@/assets/talent/talent-6.png";
import p7 from "@/assets/talent/talent-7.png";
import p8 from "@/assets/talent/talent-8.png";
import p9 from "@/assets/talent/talent-9.png";
import p10 from "@/assets/talent/talent-10.png";
import p11 from "@/assets/talent/talent-11.png";
import p12 from "@/assets/talent/talent-12.png";
import p13 from "@/assets/talent/talent-13.png";
import p14 from "@/assets/talent/talent-14.png";
import p15 from "@/assets/talent/talent-15.png";
import p16 from "@/assets/talent/talent-16.png";

const portraits = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];

/**
 * Continuous curved carousel.
 *
 * Each portrait is placed at an evenly-spaced angular slot on a wide arc.
 * `offset` shifts every portrait around the loop, so portraits rotate
 * smoothly through the arc with no overlap and no center pile-up.
 */
export function CurvedHeroCarousel() {
  const total = portraits.length;
  // Total angular span the carousel occupies (radians).
  // ~3pi means slightly more than half a circle of items are placed,
 // with portraits gracefully fading at the edges.
  const span = Math.PI * 3;
  const radiusY = 60; // vertical curve depth in px
  const radiusX = 48; // horizontal spread in vw, half-width

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

  return (
    <section
      className="relative w-full bg-background py-16 sm:py-24"
      aria-labelledby="featured-talent-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 mb-10 sm:mb-14">
        <h2
          id="featured-talent-heading"
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground"
        >
          Featured Talent
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          onWheel={onWheel}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative mx-auto w-full max-w-[1600px] h-[340px] sm:h-[420px] md:h-[480px] select-none touch-pan-y cursor-grab active:cursor-grabbing"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured talent carousel"
        >
          {portraits.map((src, i) => {
            // Position of this portrait around the loop, in [0, total).
            const pos = ((i - offset) % total + total) % total;
            // Map position to a centered value t in [-total/2, total/2].
            const t = pos > total / 2 ? pos - total : pos;
            // Normalize to [-1, 1] across visible spread.
            const n = t / (total / 2);
            // Angle along the arc.
            const angle = n * (span / 2);
            // Curve: portraits at center sit highest, edges arc down.
            const x = Math.sin(angle) * radiusX; // vw
            const y = (1 - Math.cos(angle)) * radiusY; // px (positive = down)
            const rotate = angle * (180 / Math.PI) * 0.35;

            const absN = Math.abs(n);
            const scale = 1 - Math.min(absN * 0.25, 0.35);
            // Fade portraits as they approach the loop boundary.
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
                    alt={`TKC Talent featured artist ${i + 1}`}
                    width={440}
                    height={580}
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
    </section>
  );
}