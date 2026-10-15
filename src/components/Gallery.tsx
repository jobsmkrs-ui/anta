"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { GALLERY, GALLERY_IMAGES, PRODUCTS } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Gallery() {
  const { lang, dir } = useLang();
  const isRtl = dir === "rtl";
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Build the filtered list based on the current filter
  const visibleImages = useMemo(() => {
    if (filter === "all") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.productId === filter);
  }, [filter]);

  // Get a stable index in the FULL image list (for lightbox navigation across filtered set)
  const close = () => setActive(null);
  const next = () =>
    setActive((p) => (p === null ? null : (p + 1 + visibleImages.length) % visibleImages.length));
  const prev = () =>
    setActive((p) => (p === null ? null : (p - 1 + visibleImages.length) % visibleImages.length));

  // Build filter chips: All + each product (in their canonical order)
  const filterChips = useMemo(() => {
    return [
      { id: "all", label: GALLERY.filterAll[lang] },
      ...PRODUCTS.map((p) => ({ id: p.id, label: p.name[lang] })),
    ];
  }, [lang]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[var(--brand-black)]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--brand-orange)]" />
              <span className="label-mono text-[var(--brand-orange)]">
                {GALLERY.tag[lang]}
              </span>
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
              {GALLERY.title[lang]}
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-2xl">
              {GALLERY.subtitle[lang]}
            </p>
          </Reveal>
        </div>

        {/* Filter chips */}
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap gap-2" dir={isRtl ? "rtl" : "ltr"}>
            {filterChips.map((chip) => {
              const isActive = filter === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => {
                    setFilter(chip.id);
                    setActive(null);
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-[10px] md:text-xs label-mono transition border",
                    isActive
                      ? "bg-[var(--brand-orange)] text-black border-[var(--brand-orange)] shadow-[0_0_12px_rgba(45,183,134,0.4)]"
                      : "bg-[var(--brand-coal)] text-[var(--brand-silver)] border-[var(--brand-steel)] hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-chrome)]"
                  )}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <Stagger
          key={filter /* re-mounts to re-trigger stagger on filter change */}
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
          stagger={0.05}
        >
          {visibleImages.map((img, i) => {
            const product = PRODUCTS.find((p) => p.id === img.productId);
            return (
              <StaggerItem key={`${filter}-${img.src}`}>
                <button
                  onClick={() => setActive(i)}
                  className="group relative block w-full aspect-square overflow-hidden rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] hover:border-[var(--brand-orange)]/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1"
                >
                  <img
                    src={img.src}
                    alt={`${product?.name[lang] ?? "AntA"} — ${img.label[lang]}`}
                    className="absolute inset-0 h-full w-full object-cover bw-filter-soft transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition duration-500" />
                  {/* Product tag (top-end) */}
                  <div className="absolute top-2 end-2">
                    <span
                      className={cn(
                        "inline-block px-1.5 py-0.5 rounded text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-white",
                        "bg-gradient-to-r",
                        product?.accent ?? "from-slate-700 to-slate-900"
                      )}
                    >
                      {product?.name[lang].replace("AntA ", "")}
                    </span>
                  </div>
                  {/* Label + eye (bottom) */}
                  <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition duration-500">
                    <span className="text-[10px] md:text-xs font-semibold text-[var(--brand-chrome)] drop-shadow leading-tight">
                      {img.label[lang]}
                    </span>
                    <Eye className="h-3.5 w-3.5 text-[var(--brand-orange)] drop-shadow" />
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 grid place-items-center bg-[var(--brand-black)]/95 backdrop-blur-md p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-4 end-4 grid h-10 w-10 place-items-center rounded-full border border-[var(--brand-steel)] bg-[var(--brand-coal)]/80 text-[var(--brand-chrome)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isRtl) next();
                else prev();
              }}
              className="absolute start-4 grid h-10 w-10 place-items-center rounded-full border border-[var(--brand-steel)] bg-[var(--brand-coal)]/80 text-[var(--brand-chrome)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isRtl) prev();
                else next();
              }}
              className="absolute end-4 grid h-10 w-10 place-items-center rounded-full border border-[var(--brand-steel)] bg-[var(--brand-coal)]/80 text-[var(--brand-chrome)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 transition"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const img = visibleImages[active];
                const product = PRODUCTS.find((p) => p.id === img.productId);
                return (
                  <>
                    <img
                      src={img.src}
                      alt={`${product?.name[lang] ?? "AntA"} — ${img.label[lang]}`}
                      className="max-h-[85vh] max-w-[85vw] object-contain rounded-md border border-[var(--brand-steel)] shadow-2xl"
                    />
                    <div className="absolute bottom-3 start-1/2 -translate-x-1/2 rounded-full bg-black/85 border border-[var(--brand-steel)] px-4 py-1.5 text-[10px] label-mono backdrop-blur-sm flex items-center gap-2">
                      <span className="text-[var(--brand-orange)]">
                        {product?.name[lang].replace("AntA ", "")}
                      </span>
                      <span className="text-[var(--brand-silver)]/40">·</span>
                      <span className="text-[var(--brand-chrome)]">{img.label[lang]}</span>
                      <span className="text-[var(--brand-silver)]/40">·</span>
                      <span className="text-[var(--brand-silver)]">{active + 1} / {visibleImages.length}</span>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
