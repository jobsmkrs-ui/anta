"use client";

import { useEffect, useRef } from "react";

/**
 * GrainOverlay — fixed full-screen SVG noise overlay with subtle parallax drift.
 * Sits at z-index 1, pointer-events-none, mix-blend-mode overlay.
 */
export function GrainOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle parallax: nudge the grain on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      // Slow parallax drift (cap to keep it subtle)
      const ty = (y * 0.04) % 24;
      ref.current.style.transform = `translateY(${ty}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div ref={ref} className="grain-overlay" aria-hidden="true" />;
}
