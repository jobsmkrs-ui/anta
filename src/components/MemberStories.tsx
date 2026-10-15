"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { MEMBER_STORIES } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

const AUTO_ADVANCE_MS = 6000;

export function MemberStories() {
  const { lang, dir } = useLang();
  const isRtl = dir === "rtl";
  const items = MEMBER_STORIES.items;
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (next: number) => {
      setIndex((curr) => {
        const total = items.length;
        const target = ((next % total) + total) % total;
        return target;
      });
    },
    [items.length]
  );

  // Auto-advance with rubber-band pause on drag
  useEffect(() => {
    if (dragging) return;
    const id = setInterval(() => {
      setIndex((c) => (c + 1) % items.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [dragging, items.length]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(index + 1);
      else if (e.key === "ArrowLeft") go(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setDragging(false);
    const threshold = 60;
    if (isRtl) {
      if (info.offset.x > threshold) go(index - 1);
      else if (info.offset.x < -threshold) go(index + 1);
    } else {
      if (info.offset.x < -threshold) go(index + 1);
      else if (info.offset.x > threshold) go(index - 1);
    }
  };

  const Prev = isRtl ? ChevronRight : ChevronLeft;
  const Next = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section
      id="stories"
      className="py-16 md:py-24 bg-[var(--brand-coal)] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="absolute top-1/3 -start-24 w-96 h-96 rounded-full bg-[var(--brand-orange)]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--brand-orange)]" />
              <span className="label-mono text-[var(--brand-orange)]">
                {MEMBER_STORIES.tag[lang]}
              </span>
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
              {MEMBER_STORIES.title[lang]}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-2xl">
              {MEMBER_STORIES.subtitle[lang]}
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div className="mt-10 relative">
            <div
              className="relative overflow-hidden"
              style={{ cursor: dragging ? "grabbing" : "grab" }}
            >
              <motion.div
                ref={trackRef}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                dragMomentum={true}
                onDragStart={() => setDragging(true)}
                onDragEnd={onDragEnd}
                className="story-track flex"
                style={{ width: `${items.length * 100}%` }}
                animate={{
                  x: `-${index * (100 / items.length)}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 30,
                  mass: 0.8,
                }}
              >
                {items.map((s, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0"
                    style={{ width: `${100 / items.length}%` }}
                  >
                    <div className="pe-4 md:pe-6">
                      <StoryCard
                        before={s.before[lang]}
                        after={s.after[lang]}
                        tag={s.tag[lang]}
                        index={i + 1}
                        total={items.length}
                        lang={lang}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-10 bg-[var(--brand-orange)]"
                        : "w-4 bg-[var(--brand-steel)] hover:bg-[var(--brand-silver)]"
                    }`}
                    aria-label={`Go to story ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] label-mono text-[var(--brand-silver)]">
                  {MEMBER_STORIES.dragHint[lang]}
                </span>
                <button
                  onClick={() => go(index - 1)}
                  className="grid h-10 w-10 place-items-center rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] text-[var(--brand-chrome)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 transition"
                  aria-label="Previous"
                >
                  <Prev className="h-4 w-4" />
                </button>
                <button
                  onClick={() => go(index + 1)}
                  className="grid h-10 w-10 place-items-center rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] text-[var(--brand-chrome)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 transition"
                  aria-label="Next"
                >
                  <Next className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Counter */}
            <div className="mt-3 text-[10px] label-mono text-[var(--brand-silver)] text-center">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StoryCard({
  before,
  after,
  tag,
  index,
  total,
  lang,
}: {
  before: string;
  after: string;
  tag: string;
  index: number;
  total: number;
  lang: "en" | "ar";
}) {
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <div className="rounded-xl border border-[var(--brand-steel)] bg-[var(--brand-graphite)] overflow-hidden">
      {/* Header strip */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--brand-steel)] bg-[var(--brand-black)]/40">
        <div className="text-[10px] label-mono text-[var(--brand-orange)]">
          {tag.toUpperCase()}
        </div>
        <div className="text-[10px] label-mono text-[var(--brand-silver)]">
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Before / After grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--brand-steel)]">
        {/* Before */}
        <div className="p-5 bg-[var(--brand-black)]/60 relative">
          <div className="absolute top-0 start-0 h-1 w-full bg-red-900/60" />
          <div className="label-mono text-red-400/90 mb-2">
            {lang === "en" ? "BEFORE" : "قبل"}
          </div>
          <p className="text-sm md:text-base text-[var(--brand-silver)] leading-relaxed text-condensed">
            {before}
          </p>
        </div>
        {/* After */}
        <div className="p-5 bg-[var(--brand-graphite)] relative">
          <div className="absolute top-0 start-0 h-1 w-full bg-[var(--brand-orange)]" />
          <div className="label-mono text-[var(--brand-orange)] mb-2 flex items-center gap-2">
            {lang === "en" ? "WITH ANTA" : "مع أنتا"}
            <Arrow className="h-3 w-3" />
          </div>
          <p className="text-sm md:text-base text-[var(--brand-chrome)] leading-relaxed font-medium text-condensed">
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}
