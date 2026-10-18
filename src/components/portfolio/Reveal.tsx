import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties, type PointerEvent } from "react";

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => { const e = entries[0]; if (!e) return;
      if (e.isIntersecting) { el.dataset["visible"] = "true"; io.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as CSSProperties}>{children}</Tag>;
}

/** Tracks pointer for the hover-card spotlight. */
export const spotlight = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/** Subtle 3D tilt for fine pointers only. */
export const tilt = (e: PointerEvent<HTMLElement>) => {
  spotlight(e);
  if (e.pointerType !== "mouse") return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-3px)`;
};
export const untilt = (e: PointerEvent<HTMLElement>) => { e.currentTarget.style.transform = ""; };
