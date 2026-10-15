"use client";

import { useLang } from "@/components/LanguageProvider";
import { ABOUT, BRAND } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { lang } = useLang();
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--brand-black)] relative">
      <div className="absolute inset-0 grid-pattern-dark opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left — sticky title card */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[var(--brand-orange)]" />
                <span className="label-mono text-[var(--brand-orange)]">
                  {ABOUT.tag[lang]}
                </span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
                {ABOUT.title[lang]}
              </h2>
            </Reveal>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ABOUT.stats.map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-4 text-center hover-lift hover:border-[var(--brand-orange)]/40 relative overflow-hidden">
                    <div className="absolute -top-3 -end-3 h-10 w-10 rounded-full bg-[var(--brand-orange)]/10 blur-xl group-hover:bg-[var(--brand-orange)]/25 transition" />
                    <div className="relative text-2xl md:text-3xl font-black text-[var(--brand-orange)] tabular-nums">
                      {s.value}
                    </div>
                    <div className="relative mt-1 text-[10px] label-mono text-[var(--brand-silver)]">
                      {s.label[lang]}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — body */}
          <div>
            <Reveal>
              <p className="text-sm md:text-base leading-relaxed text-[var(--brand-silver)] text-condensed">
                {ABOUT.body1[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-[var(--brand-silver)] text-condensed">
                {ABOUT.body2[lang]}
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <Reveal delay={0.15}>
                <div className="group h-full rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-5 hover-lift hover:border-[var(--brand-orange)]/40 relative overflow-hidden">
                  <div className="absolute top-0 end-0 h-16 w-16 rounded-full bg-[var(--brand-orange)]/10 blur-2xl group-hover:bg-[var(--brand-orange)]/15 transition" />
                  <div className="relative label-mono text-[var(--brand-orange)]">
                    {lang === "en" ? "Mission" : "الرسالة"}
                  </div>
                  <p className="relative mt-2 text-xs md:text-sm leading-relaxed text-[var(--brand-silver)] text-condensed">
                    {BRAND.mission[lang]}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="group h-full rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-5 hover-lift hover:border-[var(--brand-orange)]/40 relative overflow-hidden">
                  <div className="absolute top-0 end-0 h-16 w-16 rounded-full bg-[var(--brand-orange)]/10 blur-2xl group-hover:bg-[var(--brand-orange)]/15 transition" />
                  <div className="relative label-mono text-[var(--brand-orange)]">
                    {lang === "en" ? "Vision" : "الرؤية"}
                  </div>
                  <p className="relative mt-2 text-xs md:text-sm leading-relaxed text-[var(--brand-silver)] text-condensed">
                    {BRAND.vision[lang]}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
