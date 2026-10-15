"use client";

import { Mail, FileText, ArrowUp } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { useSpecs } from "@/components/SpecsProvider";
import { FOOTER, BRAND, NAV, PRODUCTS } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  const { lang } = useLang();
  const { openFor } = useSpecs();
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="mt-auto bg-[var(--brand-black)] text-[var(--brand-chrome)] relative overflow-hidden border-t border-[var(--brand-steel)]">
      <div className="absolute inset-0 grid-pattern-dark opacity-15" />
      <div className="absolute -top-24 -end-24 w-72 h-72 rounded-full bg-[var(--brand-orange)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--brand-chrome)] overflow-hidden ring-1 ring-[var(--brand-steel)]">
                  <img
                    src="/anta-logo.png"
                    alt="AntA"
                    className="h-full w-full object-contain p-1"
                  />
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-black">{BRAND.productBrand[lang]}</span>
                  <span className="text-[9px] label-mono text-[var(--brand-silver)]">
                    {BRAND.companyName[lang]}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[var(--brand-silver)] text-condensed">
                {FOOTER.tagline[lang]}
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="mt-3 inline-flex items-center gap-2 text-xs text-[var(--brand-chrome)] hover:text-[var(--brand-orange)] transition"
                dir="ltr"
              >
                <Mail className="h-3.5 w-3.5" />
                {BRAND.email}
              </a>
            </Reveal>
          </div>

          {/* Quick links */}
          <div>
            <Reveal delay={0.1}>
              <div className="label-mono text-[var(--brand-orange)]">
                {FOOTER.quickLinks[lang]}
              </div>
              <ul className="mt-3 space-y-1.5">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <button
                      onClick={() => go(n.id)}
                      className="text-xs text-[var(--brand-silver)] hover:text-[var(--brand-orange)] transition"
                    >
                      {n.label[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Solutions */}
          <div>
            <Reveal delay={0.18}>
              <div className="label-mono text-[var(--brand-orange)]">
                {FOOTER.solutions[lang]}
              </div>
              <ul className="mt-3 space-y-1.5">
                {PRODUCTS.map((p) => (
                  <li key={p.id}>
                    <button
                      onClick={() => go("curriculum")}
                      className="text-xs text-[var(--brand-silver)] hover:text-[var(--brand-orange)] transition text-start"
                    >
                      {p.name[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Specs CTA */}
          <div>
            <Reveal delay={0.25}>
              <div className="label-mono text-[var(--brand-orange)]">
                {lang === "en" ? "RESOURCES" : "مصادر"}
              </div>
              <p className="mt-3 text-xs text-[var(--brand-silver)] leading-relaxed text-condensed">
                {FOOTER.specsCtaBody[lang]}
              </p>
              <button
                onClick={() => openFor(null)}
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-bright)] text-black px-4 py-2 text-xs font-bold uppercase tracking-wider transition group"
              >
                <FileText className="h-3.5 w-3.5" />
                {lang === "en" ? "Request Product Specs" : "اطلب مواصفات المنتج"}
              </button>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-[var(--brand-steel)] flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="text-[10px] label-mono text-[var(--brand-silver)]">
            © {new Date().getFullYear()} {BRAND.companyName[lang]} — {BRAND.fullCompanyName[lang]}. {FOOTER.rights[lang]}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] label-mono text-[var(--brand-silver)]">
              {lang === "en" ? "Built in Egypt · Designed for the region" : "صُنع في مصر · صُمم للمنطقة"}
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="grid h-7 w-7 place-items-center rounded-md border border-[var(--brand-steel)] text-[var(--brand-silver)] hover:bg-[var(--brand-orange)]/10 hover:text-[var(--brand-orange)] transition"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
