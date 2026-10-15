"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Clock,
  LogIn,
  FileText,
  Stethoscope,
  Pill,
  CreditCard,
  LogOut,
  ArrowRight,
  ArrowLeft,
  Lock,
  Languages,
  Database,
  FileStack,
} from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SPOTLIGHT, BRAND } from "@/lib/i18n";
import { useSpecs } from "@/components/SpecsProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const STEP_ICONS = [
  UserPlus, Clock, LogIn, FileText, Stethoscope, Pill, CreditCard, LogOut,
];

const HIGHLIGHT_ICONS = [FileStack, Clock, Languages, Lock];

export function AntACareSpotlight() {
  const { lang, dir } = useLang();
  const isRtl = dir === "rtl";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const { openFor } = useSpecs();

  return (
    <section
      id="spotlight"
      className="py-16 md:py-24 bg-[var(--brand-coal)] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern-dark opacity-25" />
      <div className="absolute top-1/3 -start-24 w-96 h-96 rounded-full bg-[var(--brand-orange)]/10 blur-3xl" />
      <div className="absolute bottom-1/4 -end-24 w-96 h-96 rounded-full bg-[var(--brand-orange)]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--brand-orange)]" />
              <span className="label-mono text-[var(--brand-orange)]">
                {SPOTLIGHT.tag[lang]}
              </span>
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
              {SPOTLIGHT.title[lang]}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-3xl">
              {SPOTLIGHT.subtitle[lang]}
            </p>
          </Reveal>
        </div>

        {/* Five-word philosophy */}
        <Reveal delay={0.1}>
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-black text-[var(--brand-chrome)] tracking-tight">
              {SPOTLIGHT.philosophy.title[lang]}
            </h3>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-3">
              {SPOTLIGHT.philosophy.items.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative rounded-md border border-[var(--brand-steel)] bg-[var(--brand-black)] p-5 text-center hover-lift hover:border-[var(--brand-orange)]/40 overflow-hidden"
                >
                  <div className="absolute -top-6 -end-6 h-16 w-16 rounded-full bg-[var(--brand-orange)]/10 blur-xl group-hover:bg-[var(--brand-orange)]/25 transition" />
                  <div className="relative">
                    <div className="text-[10px] label-mono text-[var(--brand-orange)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1.5 text-xl md:text-2xl font-black text-[var(--brand-chrome)] tracking-tight">
                      {p.word[lang]}
                    </div>
                    <div className="mt-1 text-[10px] md:text-xs text-[var(--brand-silver)] text-condensed">
                      {p.target[lang]}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-xs md:text-sm leading-relaxed text-[var(--brand-silver)] italic max-w-3xl">
              {SPOTLIGHT.philosophy.closing[lang]}
            </p>
          </div>
        </Reveal>

        {/* Patient journey workflow */}
        <Reveal delay={0.15}>
          <div className="mt-14">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-5">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-[var(--brand-chrome)] tracking-tight">
                  {SPOTLIGHT.workflow.title[lang]}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-[var(--brand-silver)] text-condensed">
                  {SPOTLIGHT.workflow.subtitle[lang]}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {SPOTLIGHT.workflow.steps.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? ArrowRight;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.92, y: 16 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative"
                    >
                      <div className="rounded-md border border-[var(--brand-steel)] bg-[var(--brand-black)] p-4 hover-lift hover:border-[var(--brand-orange)]/40 relative overflow-hidden">
                        <div className="absolute -top-4 -end-4 h-10 w-10 rounded-full bg-[var(--brand-orange)]/10 blur-xl group-hover:bg-[var(--brand-orange)]/25 transition" />
                        <div className="relative flex items-center gap-2 mb-2">
                          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--brand-orange)] text-black text-[10px] font-black">
                            {i + 1}
                          </span>
                          <Icon className="h-4 w-4 text-[var(--brand-orange)]" />
                        </div>
                        <p className="relative text-[11px] md:text-xs font-medium text-[var(--brand-chrome)] leading-snug">
                          {step[lang]}
                        </p>
                      </div>
                      {i < SPOTLIGHT.workflow.steps.length - 1 && (
                        <div className="hidden md:flex absolute top-1/2 -end-2 -translate-y-1/2 z-10 items-center">
                          <div className="grid h-5 w-5 place-items-center rounded-full bg-[var(--brand-black)] border border-[var(--brand-steel)] text-[var(--brand-orange)]">
                            <Arrow className="h-3 w-3" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Highlights grid */}
        <Reveal delay={0.2}>
          <div className="mt-14">
            <h3 className="text-xl md:text-2xl font-black text-[var(--brand-chrome)] tracking-tight">
              {SPOTLIGHT.highlights.title[lang]}
            </h3>
            <Stagger className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3" stagger={0.08}>
              {SPOTLIGHT.highlights.items.map((h, i) => {
                const Icon = HIGHLIGHT_ICONS[i] ?? Database;
                return (
                  <StaggerItem key={i}>
                    <div className="group rounded-md border border-[var(--brand-steel)] bg-[var(--brand-black)] p-5 hover-lift hover:border-[var(--brand-orange)]/40 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] group-hover:scale-110 transition-transform">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h4 className="text-xs md:text-sm font-bold text-[var(--brand-chrome)] leading-tight tracking-tight">
                          {h.title[lang]}
                        </h4>
                      </div>
                      <p className="text-[11px] md:text-xs leading-relaxed text-[var(--brand-silver)] text-condensed">
                        {h.body[lang]}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-md overflow-hidden relative bg-[var(--brand-black)] border border-[var(--brand-orange)]/30 p-8 md:p-12 text-[var(--brand-chrome)]">
            <div className="absolute inset-0 grid-pattern-dark opacity-40" />
            <div className="absolute -top-12 -end-12 w-48 h-48 rounded-full bg-[var(--brand-orange)]/15 blur-3xl" />
            <div className="absolute -bottom-12 -start-12 w-48 h-48 rounded-full bg-[var(--brand-orange)]/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  {SPOTLIGHT.cta[lang]}
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-silver)] text-condensed">
                  {lang === "en"
                    ? "Request the full AntA Care specifications — we'll share them by email shortly."
                    : "اطلب مواصفات أنتا كير الكاملة — وسنشاركها معك عبر البريد قريبًا."}
                </p>
                <div className="mt-3 flex flex-wrap gap-4 text-[10px] label-mono text-[var(--brand-silver)]">
                  <span className="text-[var(--brand-orange)]">{BRAND.email}</span>
                  <span>·</span>
                  <span dir="ltr">{BRAND.phone}</span>
                </div>
              </div>
              <button
                onClick={() => openFor("care")}
                className="inline-flex items-center gap-2 rounded-md bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-bright)] text-black px-6 py-3 text-xs font-bold uppercase tracking-wider transition group"
              >
                {lang === "en" ? "Request specs" : "اطلب المواصفات"}
                <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
