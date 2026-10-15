"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useSpecs } from "@/components/SpecsProvider";
import { STICKY_CTA } from "@/lib/i18n";

export function StickyCTA() {
  const { lang, dir } = useLang();
  const { openFor } = useSpecs();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (~70% of viewport)
      const threshold = window.innerHeight * 0.7;
      const show = window.scrollY > threshold;
      setVisible(show);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isRtl = dir === "rtl";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 140, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="sticky-cta is-visible z-40"
        >
          <div className="flex items-center gap-3 rounded-full border border-[var(--brand-orange)]/50 bg-[var(--brand-black)]/90 backdrop-blur-xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            {/* Hint text */}
            <div className="hidden md:flex flex-col items-start leading-tight pe-3 ps-2">
              <div className="text-xs font-bold text-[var(--brand-chrome)] uppercase tracking-wider">
                {STICKY_CTA.label[lang]}
              </div>
              <div className="text-[10px] text-[var(--brand-silver)]">
                {STICKY_CTA.hint[lang]}
              </div>
            </div>

            {/* Pulsing CTA button */}
            <button
              onClick={() => openFor(null)}
              className="relative inline-flex items-center gap-1.5 rounded-full bg-[var(--brand-orange)] text-black px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[var(--brand-orange-bright)] transition cta-pulse group"
            >
              {STICKY_CTA.label[lang]}
              <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="grid h-7 w-7 place-items-center rounded-full text-[var(--brand-silver)] hover:bg-white/5 hover:text-[var(--brand-chrome)] transition"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
