"use client";

import { motion } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { WHY } from "@/lib/i18n";
import { ShieldCheck, Infinity as InfinityIcon, MapPin, BadgeDollarSign, Workflow, Globe2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const ICONS = [ShieldCheck, InfinityIcon, MapPin, BadgeDollarSign, Workflow, Globe2];

export function WhyAntA() {
  const { lang } = useLang();

  return (
    <section
      id="why"
      className="py-16 md:py-24 bg-[var(--brand-black)] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern-dark opacity-25" />

      {/* Floating blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -end-20 h-80 w-80 rounded-full bg-[var(--brand-orange)]/12 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 15, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -start-20 h-80 w-80 rounded-full bg-[var(--brand-orange)]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--brand-orange)]" />
              <span className="label-mono text-[var(--brand-orange)]">
                {WHY.tag[lang]}
              </span>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
              {WHY.title[lang]}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-2xl">
              {WHY.subtitle[lang]}
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4" stagger={0.08}>
          {WHY.reasons.map((r, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <StaggerItem key={i}>
                <div className="group relative overflow-hidden rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-5 transition-all duration-500 hover:bg-[var(--brand-graphite)] hover:border-[var(--brand-orange)]/40 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] group-hover:scale-110 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-[var(--brand-chrome)] tracking-tight">
                      {r.title[lang]}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs md:text-sm leading-relaxed text-[var(--brand-silver)] text-condensed">
                    {r.body[lang]}
                  </p>
                  <div className="absolute top-2 end-3 text-4xl font-black text-white/5 group-hover:text-[var(--brand-orange)]/15 transition tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute -bottom-px start-0 h-0.5 w-full bg-gradient-to-r from-[var(--brand-orange)] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
