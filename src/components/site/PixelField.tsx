import { useEffect, useRef } from "react";

export function PixelField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type P = { x: number; y: number; base: number; amp: number; speed: number; phase: number; };
    let pixels: P[] = [];
    const dot = 2;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cell = 16;
      const out: P[] = [];
      for (let y = 0; y < height + cell; y += cell) {
        for (let x = 0; x < width + cell; x += cell) {
          if (Math.random() < 0.22) continue;
          out.push({
            x: x + (Math.random() - 0.5) * 3,
            y: y + (Math.random() - 0.5) * 3,
            base: 0.04 + Math.random() * 0.08,
            amp: 0.12 + Math.random() * 0.35,
            speed: 0.0008 + Math.random() * 0.0022,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      pixels = out;
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const drawStatic = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      for (const p of pixels) {
        const a = Math.min(1, p.base + p.amp * 0.5);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, dot, dot);
      }
    };

    const buildAndPaint = () => {
      build();
      if (reduceMotion.matches) drawStatic();
    };

    buildAndPaint();
    const ro = new ResizeObserver(buildAndPaint);
    ro.observe(canvas);

    let start = 0;
    const draw = (ts: number) => {
      if (!start) start = ts;
      const t = ts - start;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      for (const p of pixels) {
        const tw = 0.5 + 0.5 * Math.sin(t * p.speed + p.phase);
        const a = Math.min(1, p.base + p.amp * tw);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fillRect(p.x, p.y, dot, dot);
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    const startAnim = () => {
      if (rafRef.current) return;
      start = 0;
      rafRef.current = requestAnimationFrame(draw);
    };
    const stopAnim = () => {
      if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
      drawStatic();
    };

    if (reduceMotion.matches) drawStatic();
    else startAnim();

    const onMotionChange = () => { if (reduceMotion.matches) stopAnim(); else startAnim(); };
    reduceMotion.addEventListener("change", onMotionChange);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      reduceMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
