"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { BRAND_BANNER_FIT } from "@/lib/i18n";

export function BrandBanner() {
  const { lang } = useLang();

  return (
    <section
      id="manifesto"
      className="relative py-16 md:py-24 overflow-hidden bg-[var(--brand-black)] border-y border-[var(--brand-steel)]"
    >
      {/* Decorative grid + diag pattern */}
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />
      <div className="absolute inset-0 diag-pattern opacity-30" />

      {/* Floating ambient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-12 -start-12 h-56 w-56 rounded-full bg-[var(--brand-orange)]/12 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-12 -end-12 h-56 w-56 rounded-full bg-[var(--brand-orange)]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Solid bold top border */}
        <div className="h-2 w-full rounded-full bg-[var(--brand-orange)] shadow-[0_0_24px_rgba(45,183,134,0.4)]" />

        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 py-8 md:py-12">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label-mono text-[var(--brand-orange)]"
          >
            {BRAND_BANNER_FIT.pretitle[lang]}
          </motion.div>

          {/* Bold headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.04em] text-center text-[var(--brand-chrome)] leading-[1.05]"
          >
            {BRAND_BANNER_FIT.banner[lang]}
          </motion.h2>

          {/* Vertical divider + brand word */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <div className="h-12 w-1 rounded-full bg-[var(--brand-orange)] shadow-[0_0_12px_rgba(45,183,134,0.5)]" />
            <div
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
              style={{
                background: "linear-gradient(135deg, #81c7a2 0%, #2db786 50%, #157751 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontFamily:
                  lang === "ar"
                    ? "var(--font-arabic), sans-serif"
                    : "var(--font-archivo), sans-serif",
              }}
            >
              {BRAND_BANNER_FIT.brand[lang]}
            </div>
          </motion.div>

          {/* Post-line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xs md:text-sm label-mono text-[var(--brand-silver)] text-center"
          >
            {BRAND_BANNER_FIT.post[lang]}
          </motion.p>
        </div>

        {/* Solid bold bottom border */}
        <div className="h-2 w-full rounded-full bg-[var(--brand-orange)] shadow-[0_0_24px_rgba(45,183,134,0.4)]" />
      </div>
    </section>
  );
}
