"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLang } from "@/components/LanguageProvider";
import { CONTACT, PRODUCTS, BRAND } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[var(--brand-black)] relative overflow-hidden">
      <div className="absolute top-1/2 -start-32 w-96 h-96 rounded-full bg-[var(--brand-orange)]/8 blur-3xl" />
      <div className="absolute bottom-0 -end-32 w-96 h-96 rounded-full bg-[var(--brand-orange)]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* Left — copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-[var(--brand-orange)]" />
                <span className="label-mono text-[var(--brand-orange)]">
                  {CONTACT.tag[lang]}
                </span>
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight text-[var(--brand-chrome)]">
                {CONTACT.title[lang]}
              </h2>
              <p className="mt-4 text-sm md:text-base text-[var(--brand-silver)] text-condensed max-w-md">
                {CONTACT.body[lang]}
              </p>
            </Reveal>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <Reveal delay={0.1}>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="group flex items-center gap-3 rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-3 hover:border-[var(--brand-orange)]/40 hover:bg-[var(--brand-graphite)] transition"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--brand-orange)] text-black group-hover:scale-105 transition-transform">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] label-mono text-[var(--brand-silver)]">
                      {CONTACT.emailLabel[lang]}
                    </div>
                    <div className="text-[11px] font-semibold text-[var(--brand-chrome)] truncate" dir="ltr">
                      {BRAND.email}
                    </div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.18}>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-3 hover:border-[var(--brand-orange)]/40 hover:bg-[var(--brand-graphite)] transition"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-md bg-[var(--brand-silver)] text-black group-hover:scale-105 transition-transform">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] label-mono text-[var(--brand-silver)]">
                      {CONTACT.phoneLabel[lang]}
                    </div>
                    <div className="text-[11px] font-semibold text-[var(--brand-chrome)]" dir="ltr">
                      {BRAND.phone}
                    </div>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-md border border-[var(--brand-steel)] bg-[var(--brand-coal)] p-5 md:p-6 space-y-3 relative overflow-hidden"
            >
              <div className="absolute -top-16 -end-16 w-32 h-32 rounded-full bg-[var(--brand-orange)]/8 blur-2xl" />

              <div className="grid sm:grid-cols-2 gap-3 relative">
                <div>
                  <label className="text-[10px] label-mono text-[var(--brand-silver)] mb-1.5 block">
                    {CONTACT.formName[lang]}
                  </label>
                  <Input required placeholder={CONTACT.formName[lang]} className="bg-[var(--brand-black)] border-[var(--brand-steel)] text-[var(--brand-chrome)] placeholder:text-[var(--brand-silver)]/50" />
                </div>
                <div>
                  <label className="text-[10px] label-mono text-[var(--brand-silver)] mb-1.5 block">
                    {CONTACT.formCompany[lang]}
                  </label>
                  <Input placeholder={CONTACT.formCompany[lang]} className="bg-[var(--brand-black)] border-[var(--brand-steel)] text-[var(--brand-chrome)] placeholder:text-[var(--brand-silver)]/50" />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] label-mono text-[var(--brand-silver)] mb-1.5 block">
                  {CONTACT.formEmail[lang]}
                </label>
                <Input required type="email" placeholder="you@company.com" className="bg-[var(--brand-black)] border-[var(--brand-steel)] text-[var(--brand-chrome)] placeholder:text-[var(--brand-silver)]/50" />
              </div>

              <div className="relative">
                <label className="text-[10px] label-mono text-[var(--brand-silver)] mb-1.5 block">
                  {CONTACT.formSolution[lang]}
                </label>
                <Select>
                  <SelectTrigger className="w-full bg-[var(--brand-black)] border-[var(--brand-steel)] text-[var(--brand-chrome)]">
                    <SelectValue placeholder={CONTACT.solutionsPlaceholder[lang]} />
                  </SelectTrigger>
                  <SelectContent className="bg-[var(--brand-coal)] border-[var(--brand-steel)]">
                    {PRODUCTS.map((p) => (
                      <SelectItem key={p.id} value={p.id} className="text-[var(--brand-chrome)] focus:bg-[var(--brand-graphite)]">
                        {p.name[lang]} — {p.tagline[lang]}
                      </SelectItem>
                    ))}
                    <SelectItem value="general" className="text-[var(--brand-chrome)] focus:bg-[var(--brand-graphite)]">
                      {lang === "en" ? "General inquiry" : "استفسار عام"}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <label className="text-[10px] label-mono text-[var(--brand-silver)] mb-1.5 block">
                  {CONTACT.formMessage[lang]}
                </label>
                <Textarea rows={3} placeholder={CONTACT.formMessage[lang]} className="bg-[var(--brand-black)] border-[var(--brand-steel)] text-[var(--brand-chrome)] placeholder:text-[var(--brand-silver)]/50" />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-[var(--brand-orange)] text-black hover:bg-[var(--brand-orange-bright)] gap-2 font-bold uppercase tracking-wider text-sm"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {sent ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="inline-flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {CONTACT.formSuccess[lang]}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      {CONTACT.formSubmit[lang]}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
