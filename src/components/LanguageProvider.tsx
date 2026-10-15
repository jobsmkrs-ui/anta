"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import type { Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggleLang: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "mk-lang";

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") return stored;
    const browserAr = navigator.language?.toLowerCase().startsWith("ar");
    if (browserAr) return "ar";
  } catch {
    // ignore
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy-initialize from localStorage; SSR will render "en" and client will
  // hydrate from stored/browser preference. The html tag has
  // suppressHydrationWarning so this is safe.
  const [lang, setLang] = useState<Lang>(readStoredLang);

  const dir: "ltr" | "rtl" = lang === "ar" ? "rtl" : "ltr";

  // External-system sync only — no setState here.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang, dir]);

  const toggleLang = useCallback(
    () => setLang((p) => (p === "en" ? "ar" : "en")),
    []
  );

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
