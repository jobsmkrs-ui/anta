"use client";

import { useState, useEffect } from "react";
import { Menu, X, Languages, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/components/LanguageProvider";
import { useSpecs } from "@/components/SpecsProvider";
import { NAV, BRAND, SPECS } from "@/lib/i18n";

export function Navbar() {
  const { lang, toggleLang } = useLang();
  const { openFor } = useSpecs();
  const [open, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenMobile(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-black)]/85 backdrop-blur-xl border-b border-[var(--brand-steel)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 md:h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        {/* Brand */}
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 group"
          aria-label="AntA home"
        >
          <span className="relative h-9 w-9 md:h-10 md:w-10 rounded-md overflow-hidden bg-[var(--brand-chrome)] shadow ring-1 ring-[var(--brand-steel)] transition group-hover:scale-105">
            <img
              src="/anta-logo.png"
              alt="AntA logo"
              className="h-full w-full object-contain p-1"
            />
          </span>
          <span className="flex flex-col leading-tight text-start">
            <span className="text-sm md:text-base font-black text-[var(--brand-chrome)] tracking-tight">
              {BRAND.productBrand[lang]}
            </span>
            <span className="text-[9px] md:text-[10px] label-mono text-[var(--brand-silver)]">
              {BRAND.companyName[lang]}
            </span>
          </span>
        </button>

        {/* Desktop nav — high density */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="px-2.5 py-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-wider text-[var(--brand-silver)] hover:text-[var(--brand-orange)] transition"
            >
              {item.label[lang]}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          <Button
            onClick={() => openFor(null)}
            size="sm"
            className="gap-1.5 bg-[var(--brand-orange)] text-black hover:bg-[var(--brand-orange-bright)] h-9 px-3.5 text-[11px] font-bold uppercase tracking-wider hidden sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>{SPECS.navButton[lang]}</span>
          </Button>

          <button
            onClick={toggleLang}
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--brand-steel)] text-[var(--brand-chrome)] hover:border-[var(--brand-orange)] hover:bg-[var(--brand-orange)]/10 transition"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpenMobile((p) => !p)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-md border border-[var(--brand-steel)] text-[var(--brand-chrome)]"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-[var(--brand-steel)] bg-[var(--brand-black)]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-0.5">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="px-3 py-2.5 text-start text-xs font-semibold uppercase tracking-wider text-[var(--brand-silver)] hover:bg-[var(--brand-orange)]/10 hover:text-[var(--brand-orange)] rounded-md"
              >
                {item.label[lang]}
              </button>
            ))}
            <button
              onClick={() => {
                setOpenMobile(false);
                openFor(null);
              }}
              className="mt-2 px-3 py-2.5 text-start text-xs font-bold uppercase tracking-wider bg-[var(--brand-orange)] text-black rounded-md flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              {SPECS.navButton[lang]}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
