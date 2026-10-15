"use client";

import { motion } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/LanguageProvider";
import { useSpecs } from "@/components/SpecsProvider";
import {
  HERO,
  HERO_FIT,
  BRAND,
  PRODUCTS,
} from "@/lib/i18n";
import {
  Stethoscope,
  ShoppingCart,
  Truck,
  Home,
  Car,
  Users,
  Building2,
} from "lucide-react";

const PRODUCT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  "shopping-cart": ShoppingCart,
  truck: Truck,
  home: Home,
  car: Car,
  users: Users,
  building: Building2,
};

export function Hero() {
  const { lang, dir } = useLang();
  const { openFor } = useSpecs();
  const isRtl = dir === "rtl";

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 hero-spotlight" />
      <div className="absolute inset-0 -z-10 grid-pattern-dark opacity-50" />
      <div className="absolute inset-0 -z-10 diag-pattern opacity-40" />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 -end-16 w-80 h-80 rounded-full bg-[var(--brand-orange)]/15 blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-20 -start-16 w-96 h-96 rounded-full bg-[var(--brand-orange)]/8 blur-3xl animate-float -z-10" />

      {/* Reel control (top-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-24 start-6 md:start-10 z-10 flex items-center gap-2 text-[10px] label-mono text-[var(--brand-silver)]"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--brand-steel)] bg-[var(--brand-coal)]/80 backdrop-blur-sm">
          <VolumeX className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
        </span>
        <span>{HERO_FIT.reel.muted[lang]}</span>
        <span className="text-[var(--brand-silver)]/50">·</span>
        <span className="text-[var(--brand-orange)]">{HERO_FIT.reel.unmute[lang]}</span>
      </motion.div>

      <div className="mx-auto max-w-7xl w-full px-4 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-orange)]/40 bg-[var(--brand-orange)]/5 px-3 py-1.5 text-[10px] label-mono text-[var(--brand-chrome)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-orange)] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-orange)]" />
            </span>
            {HERO_FIT.badge[lang]}
          </div>
        </motion.div>

        {/* Headline — brand attitude */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-center text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-black leading-[0.95] tracking-tight"
        >
          <span className="block text-[var(--brand-chrome)]">OWN YOUR CODE.</span>
          <span className="block orange-grad-text">OWN YOUR DATA.</span>
        </motion.h1>

        {/* Attitude line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-5 md:mt-6 text-center text-base md:text-xl text-[var(--brand-silver)] text-condensed max-w-3xl mx-auto"
        >
          {HERO_FIT.attitude[lang]}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onClick={() => scrollTo("curriculum")}
            className="h-12 px-7 gap-2 bg-[var(--brand-orange)] text-black hover:bg-[var(--brand-orange-bright)] font-bold uppercase tracking-wider text-sm cta-pulse group"
          >
            {HERO.ctaPrimary[lang]}
            <ArrowRight
              className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                isRtl ? "rotate-180 group-hover:-translate-x-1" : ""
              }`}
            />
          </Button>
          <Button
            onClick={() => openFor(null)}
            variant="outline"
            className="h-12 px-7 border-[var(--brand-steel)] text-[var(--brand-chrome)] hover:bg-[var(--brand-orange)]/10 hover:border-[var(--brand-orange)] bg-transparent font-bold uppercase tracking-wider text-sm"
          >
            {HERO_FIT.reel.playLabel[lang]}
          </Button>
        </motion.div>

        {/* Marquee value strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 md:mt-16 overflow-hidden border-y border-[var(--brand-steel)]/80 py-3"
        >
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...HERO.marquee, ...HERO.marquee, ...HERO.marquee].map((m, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2.5 text-[10px] md:text-xs label-mono text-[var(--brand-silver)]"
              >
                <span className="h-1 w-1 rounded-full bg-[var(--brand-orange)]" />
                {m[lang]}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Coach team strip — brand attitude + coach team showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16"
        >
          <div className="text-center mb-6">
            <div className="label-mono text-[var(--brand-orange)]">
              {HERO_FIT.teamStripTitle[lang]}
            </div>
            <button
              onClick={() => scrollTo("curriculum")}
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-[var(--brand-silver)] hover:text-[var(--brand-orange)] transition"
            >
              {HERO_FIT.teamStripHint[lang]}
              <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
            </button>
          </div>

          {/* Product team avatars */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-3">
            {PRODUCTS.map((p, i) => {
              const Icon = PRODUCT_ICONS[p.icon] ?? Stethoscope;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => scrollTo("curriculum")}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.1 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex flex-col items-center gap-2 p-2 md:p-3 rounded-lg border border-[var(--brand-steel)] bg-[var(--brand-coal)]/60 hover:bg-[var(--brand-graphite)] hover:border-[var(--brand-orange)]/50 transition-all"
                >
                  <div
                    className={`grid h-9 w-9 md:h-11 md:w-11 place-items-center rounded-md bg-gradient-to-br ${p.accent} text-white shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[var(--brand-silver)] text-center group-hover:text-[var(--brand-chrome)] transition leading-tight">
                    {p.name[lang].replace("AntA ", "")}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue at bottom */}
      <motion.button
        onClick={() => scrollTo("manifesto")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-6 start-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--brand-silver)] hover:text-[var(--brand-orange)] transition"
      >
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
