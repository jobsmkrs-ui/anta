"use client";

import { useState } from "react";
import {
  Stethoscope,
  ShoppingCart,
  Truck,
  Home,
  Car,
  Users,
  Building2,
  ArrowRight,
  ArrowLeft,
  RotateCw,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/LanguageProvider";
import { useSpecs } from "@/components/SpecsProvider";
import { PRODUCTS, CURRICULUM, COACHES } from "@/lib/i18n";
import type { Lang, ProductContent } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  stethoscope: Stethoscope,
  "shopping-cart": ShoppingCart,
  truck: Truck,
  home: Home,
  car: Car,
  users: Users,
  building: Building2,
};

function FlipCard({
  product,
  lang,
  isFlipped,
  onToggle,
}: {
  product: ProductContent;
  lang: Lang;
  isFlipped: boolean;
  onToggle: () => void;
}) {
  const Icon = ICONS[product.icon] ?? CheckCircle2;
  const { openFor } = useSpecs();
  const isRtl = lang === "ar";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="flip-card h-[440px] md:h-[460px]" onClick={onToggle}>
      <div className={cn("flip-card-inner", isFlipped && "is-flipped")}>
        {/* FRONT */}
        <div className="flip-card-face rounded-xl border border-[var(--brand-steel)] bg-[var(--brand-coal)] overflow-hidden">
          {/* Gradient accent strip */}
          <div className={cn("h-1.5 bg-gradient-to-r", product.accent)} />
          <div className="p-5 md:p-6 flex flex-col h-[calc(100%-1.5px)]">
            {/* Top: icon + flip hint */}
            <div className="flex items-start justify-between">
              <div className={cn("grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br text-white shadow-lg", product.accent)}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1 text-[10px] label-mono text-[var(--brand-silver)]">
                <RotateCw className="h-3 w-3" />
                <span>{lang === "en" ? "Flip" : "اقلب"}</span>
              </div>
            </div>
            {/* Name + tagline */}
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-black text-[var(--brand-chrome)] tracking-tight">
                {product.name[lang]}
              </h3>
              <div className="mt-1.5 text-[10px] md:text-xs label-mono text-[var(--brand-orange)]">
                {product.tagline[lang]}
              </div>
            </div>
            {/* Description */}
            <p className="mt-4 text-xs md:text-sm leading-relaxed text-[var(--brand-silver)] text-condensed flex-1 line-clamp-6">
              {product.description[lang]}
            </p>
            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-[var(--brand-steel)] flex items-center justify-between">
              <div className="text-[10px] label-mono text-[var(--brand-silver)]">
                {product.features.length} {lang === "en" ? "FEATURES" : "ميزات"}
              </div>
              <div
                className="text-[10px] label-mono text-[var(--brand-orange)] cursor-pointer hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
              >
                {lang === "en" ? "View certifications →" : "عرض الشهادات →"}
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-face flip-card-back rounded-xl border border-[var(--brand-orange)]/40 bg-[var(--brand-graphite)] overflow-hidden">
          <div className={cn("h-1.5 bg-gradient-to-r", product.accent)} />
          <div className="p-5 md:p-6 flex flex-col h-[calc(100%-1.5px)]">
            <div className="flex items-center justify-between">
              <div className="text-[10px] label-mono text-[var(--brand-orange)]">
                {lang === "en" ? "CERTIFICATIONS" : "الشهادات"}
              </div>
              <div className="flex items-center gap-1 text-[10px] label-mono text-[var(--brand-silver)] cursor-pointer hover:text-[var(--brand-chrome)]"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
              >
                <RotateCw className="h-3 w-3" />
                <span>{lang === "en" ? "Back" : "رجوع"}</span>
              </div>
            </div>

            {/* Product name on the back */}
            <h3 className="mt-3 text-lg md:text-xl font-black text-[var(--brand-chrome)] tracking-tight">
              {product.name[lang]}
            </h3>

            {/* Features list */}
            <ul className="mt-3 space-y-1.5 overflow-y-auto thin-scroll flex-1 max-h-[200px] pr-1">
              {product.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[11px] md:text-xs text-[var(--brand-silver)] leading-snug"
                >
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-[var(--brand-orange)] mt-0.5" />
                  <span>{f[lang]}</span>
                </li>
              ))}
            </ul>

            {/* Signature use case */}
            <div className="mt-3 pt-3 border-t border-[var(--brand-steel)]">
              <div className="text-[10px] label-mono text-[var(--brand-orange)]">
                {CURRICULUM.signature[lang]}
              </div>
              <p className="mt-1 text-[11px] text-[var(--brand-silver)] leading-relaxed line-clamp-2">
                {product.signature[lang]}
              </p>
            </div>

            {/* Request specs CTA */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                openFor(product.id);
              }}
              className="mt-3 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-[var(--brand-orange)] text-black hover:bg-[var(--brand-orange-bright)] transition text-xs font-bold uppercase tracking-wider group"
            >
              {CURRICULUM.requestCta[lang]}
              <Arrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Solutions() {
  const { lang } = useLang();
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[var(--brand-black)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header — COACHES / Curriculum */}
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--brand-orange)]" />
              <span className="label-mono text-[var(--brand-orange)]">
                {CURRICULUM.tag[lang]} · {COACHES.tag[lang]}
              </span>
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
              {CURRICULUM.title[lang]}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-2xl">
              {CURRICULUM.subtitle[lang]}
            </p>
            <p className="mt-3 text-xs text-[var(--brand-silver)]/70 italic">
              {COACHES.subtitle[lang]}
            </p>
          </Reveal>
        </div>

        {/* Flip hint */}
        <Reveal delay={0.1}>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/5 px-3 py-1.5 text-[10px] label-mono text-[var(--brand-orange)]">
            <RotateCw className="h-3 w-3" />
            {CURRICULUM.flipHint[lang]}
          </div>
        </Reveal>

        {/* Groups with their products */}
        <div className="mt-10 space-y-12 md:space-y-16">
          {CURRICULUM.groups.map((group, gi) => {
            const groupProducts = group.productIds
              .map((id) => PRODUCTS.find((p) => p.id === id))
              .filter(Boolean) as ProductContent[];

            return (
              <Reveal key={group.id} delay={gi * 0.05}>
                <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6 lg:gap-10 items-start">
                  {/* Group header (sticky) */}
                  <div className="lg:sticky lg:top-28">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl md:text-4xl font-black text-[var(--brand-orange)]/40 tabular-nums">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-[var(--brand-chrome)] tracking-tight">
                          {group.title[lang]}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 text-xs md:text-sm text-[var(--brand-silver)] text-condensed max-w-md">
                      {group.desc[lang]}
                    </p>
                    <div className="mt-3 h-px w-16 bg-[var(--brand-orange)]" />
                  </div>

                  {/* Products grid */}
                  <Stagger
                    className={cn(
                      "grid gap-4 md:gap-5",
                      groupProducts.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
                    )}
                    stagger={0.08}
                  >
                    {groupProducts.map((p) => (
                      <StaggerItem key={p.id}>
                        <FlipCard
                          product={p}
                          lang={lang}
                          isFlipped={flippedId === p.id}
                          onToggle={() => toggleFlip(p.id)}
                        />
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
