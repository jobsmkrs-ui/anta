"use client";

import { FileText, Download, X, BookOpen, FileBadge } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useResources } from "@/components/ResourcesProvider";
import { useLang } from "@/components/LanguageProvider";
import { RESOURCES, PRODUCTS, BRAND } from "@/lib/i18n";

export function ResourcesSheet() {
  const { open, setOpen } = useResources();
  const { lang } = useLang();

  const profile = [
    { ...RESOURCES.items.profileEn, badge: RESOURCES.badges.en },
    { ...RESOURCES.items.profileAr, badge: RESOURCES.badges.ar },
  ];

  const brochures = PRODUCTS.flatMap((p) => [
    {
      name: p.name,
      tagline: p.tagline,
      accent: p.accent,
      badge: RESOURCES.badges.en,
      path: p.brochureEnPath,
    },
    {
      name: p.name,
      tagline: p.tagline,
      accent: p.accent,
      badge: RESOURCES.badges.ar,
      path: p.brochureArPath,
    },
  ]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side={lang === "ar" ? "left" : "right"}
        className="w-full sm:max-w-xl overflow-y-auto thin-scroll p-0 border-[var(--brand)]/20"
      >
        <SheetHeader className="p-6 pb-4 border-b border-border bg-gradient-to-br from-[var(--brand-deep)] to-[var(--brand)] text-background sticky top-0 z-10">
          <div className="flex items-start justify-between">
            <div>
              <SheetTitle className="text-2xl font-extrabold text-background flex items-center gap-2">
                <FileBadge className="h-6 w-6 text-[var(--brand-amber)]" />
                {RESOURCES.title[lang]}
              </SheetTitle>
              <SheetDescription className="text-background/75 mt-2 text-sm leading-relaxed">
                {RESOURCES.subtitle[lang]}
              </SheetDescription>
            </div>
            <SheetClose className="rounded-lg p-1.5 hover:bg-white/10 transition" asChild>
              <button aria-label={RESOURCES.close[lang]}>
                <X className="h-5 w-5 text-background" />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="p-6 space-y-8">
          {/* Company Profile */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-[var(--brand-amber)]" />
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-deep)]">
                {RESOURCES.sections.profile[lang]}
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {profile.map((it, i) => (
                <a
                  key={i}
                  href={it.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border bg-card p-4 hover:border-[var(--brand)]/40 hover:shadow-md transition card-glow relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center justify-center h-7 w-12 rounded-md bg-[var(--brand-deep)] text-background text-[10px] font-bold tracking-wider">
                      {it.badge}
                    </span>
                    <FileText className="h-4 w-4 text-muted-foreground group-hover:text-[var(--brand-amber)] transition" />
                  </div>
                  <div className="text-sm font-bold text-[var(--brand-deep)] leading-tight">
                    {it.title[lang]}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {it.desc[lang]}
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-amber)]">
                    <Download className="h-3.5 w-3.5" />
                    {RESOURCES.download[lang]}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Product Brochures */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-4 w-4 text-[var(--brand-amber)]" />
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-deep)]">
                {RESOURCES.sections.brochures[lang]}
              </h3>
            </div>
            <div className="space-y-2">
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <div className={`h-1 bg-gradient-to-r ${p.accent}`} />
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2.5">
                      <div>
                        <div className="text-sm font-bold text-[var(--brand-deep)]">
                          {p.name[lang]}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">
                          {p.tagline[lang]}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={p.brochureEnPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-2 rounded-lg border border-border bg-background/50 px-3 py-2 hover:bg-[var(--brand)]/5 transition"
                      >
                        <span className="inline-flex items-center justify-center h-5 px-1.5 rounded bg-[var(--brand-deep)] text-background text-[9px] font-bold">
                          EN
                        </span>
                        <Download className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[var(--brand-amber)] transition" />
                      </a>
                      <a
                        href={p.brochureArPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-2 rounded-lg border border-border bg-background/50 px-3 py-2 hover:bg-[var(--brand)]/5 transition"
                      >
                        <span className="inline-flex items-center justify-center h-5 px-1.5 rounded bg-[var(--brand-deep)] text-background text-[9px] font-bold">
                          AR
                        </span>
                        <Download className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[var(--brand-amber)] transition" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer with contact */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <div className="text-xs text-muted-foreground mb-1">
              {lang === "en" ? "Questions?" : "أسئلة؟"}
            </div>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-sm font-semibold text-[var(--brand-deep)] hover:text-[var(--brand-amber)]"
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
