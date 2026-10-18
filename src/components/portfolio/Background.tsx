import { useEffect, useRef } from "react";

/** Fixed, site-wide ambient layer: aurora, grid, mouse light, particle canvas with neural links. */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, running = true;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const count = mobile ? 34 : Math.min(80, Math.floor((w * h) / 18000));
    const pts = Array.from({ length: count }, () => {
      const z = Math.random() * 0.8 + 0.2;
      return { x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.55 * z, vy: (Math.random() - 0.5) * 0.55 * z, z, hue: Math.random() > 0.5 ? 0 : 1 };
    });
    const linkDist = mobile ? 100 : 150;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        {
          const sp = reduced ? 0.4 : 1;
          p.x += p.vx * sp; p.y += p.vy * sp;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 22000) { const f = (1 - d2 / 22000) * 0.6 * p.z; p.x += (dx / Math.sqrt(d2 + 1)) * f; p.y += (dy / Math.sqrt(d2 + 1)) * f; }
          if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i]!, b = pts[j]!;
          const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(139,140,246,${(1 - d / linkDist) * 0.35 * Math.min(a.z, b.z)})`;
            ctx.lineWidth = 0.8; ctx.shadowBlur = 6; ctx.shadowColor = "rgba(139,92,246,0.6)";
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        const r = p.z * 1.6;
        ctx.fillStyle = p.hue ? `rgba(34,211,238,${0.35 + p.z * 0.5})` : `rgba(167,139,250,${0.35 + p.z * 0.5})`;
        ctx.shadowBlur = 8 * p.z; ctx.shadowColor = ctx.fillStyle;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;
      if (running) raf = requestAnimationFrame(draw);
    };
    draw();

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX; mouse.y = e.clientY;
      lightRef.current?.style.setProperty("--cx", e.clientX + "px");
      lightRef.current?.style.setProperty("--cy", e.clientY + "px");
    };
    const onVis = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize);
    if (!mobile) window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      <div className="bg-grid absolute inset-0" />
      <div ref={lightRef} className="mouse-light absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
