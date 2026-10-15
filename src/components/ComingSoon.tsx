"use client";

import { useLang } from "@/components/LanguageProvider";
import { ROADMAP } from "@/lib/i18n";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export function ComingSoon() {
  const { lang } = useLang();

  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[var(--brand-coal)] relative">
      <div className="absolute inset-0 diag-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[var(--brand-orange)]" />
                <span className="label-mono text-[var(--brand-orange)]">
                  <Sparkles className="inline h-3 w-3 me-1" />
                  {ROADMAP.tag[lang]}
                </span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
                {ROADMAP.title[lang]}
              </h2>
              <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-md">
                {ROADMAP.subtitle[lang]}
              </p>
            </Reveal>
          </div>

          <ol className="relative">
            <div className="absolute start-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand-orange)] via-[var(--brand-orange)]/40 to-transparent" />
            {ROADMAP.items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative ps-12 pb-5 last:pb-0"
              >
                <div className="absolute start-0 top-1 grid h-8 w-8 place-items-center rounded-full bg-[var(--brand-black)] border-2 border-[var(--brand-orange)] text-xs font-black text-[var(--brand-orange)] shadow-[0_0_16px_rgba(45,183,134,0.4)]">
                  {i + 1}
                </div>
                <div className="rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-4 hover-lift hover:border-[var(--brand-orange)]/40">
                  <p className="text-sm md:text-base font-medium leading-relaxed text-[var(--brand-silver)] text-condensed">
                    {it[lang]}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
