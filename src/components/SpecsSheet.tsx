"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Send, CheckCircle2, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSpecs } from "@/components/SpecsProvider";
import { useLang } from "@/components/LanguageProvider";
import { sendForm } from "@/lib/sendForm";
import { SPECS, PRODUCTS, BRAND } from "@/lib/i18n";

export function SpecsSheet() {
  const { open, setOpen, productId } = useSpecs();
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [errorDetail, setErrorDetail] = useState("");
  const [method, setMethod] = useState<"email" | "whatsapp" | "phone">("email");
  // Local selection (used when no productId preselected). When productId is
  // set, the select is controlled by the provider; when the user picks a
  // different product, we keep that override in local state.
  const [userSelected, setUserSelected] = useState<string>("");
  const selectedProduct = productId ?? userSelected;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const data = new FormData(e.currentTarget);
    setSending(true);
    setError(false);
    const productName =
      PRODUCTS.find((p) => p.id === selectedProduct)?.name.en ??
      (selectedProduct || "General inquiry");
    const result = await sendForm({
      subject: `AntA website — Specs request: ${productName}`,
      product: productName,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      replyto: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      phone: String(data.get("phone") ?? ""),
      preferred_contact: method,
    });
    setSending(false);
    if (result.ok) setSubmitted(true);
    else {
      setError(true);
      setErrorDetail(result.message ?? "");
    }
  };

  const reset = () => {
    setSubmitted(false);
    setError(false);
    (document.getElementById("specs-form") as HTMLFormElement | null)?.reset();
    setMethod("email");
    setUserSelected("");
  };

  const handleClose = (open: boolean) => {
    setOpen(open);
    if (!open) {
      // Reset on close after a short delay so the closing animation isn't interrupted
      setTimeout(reset, 300);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent
        side={lang === "ar" ? "left" : "right"}
        className="w-full sm:max-w-lg overflow-y-auto thin-scroll p-0 border-slate-200 bg-white text-slate-900"
      >
        <SheetHeader className="p-6 pb-4 border-b border-slate-200 bg-white text-slate-900 sticky top-0 z-10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <SheetTitle className="text-2xl font-black text-slate-900 flex items-center gap-2 tracking-tight">
                <FileText className="h-6 w-6 text-emerald-600" />
                {SPECS.title[lang]}
              </SheetTitle>
              <SheetDescription className="text-slate-600 mt-2 text-sm leading-relaxed">
                {SPECS.subtitle[lang]}
              </SheetDescription>
            </div>
            <SheetClose className="rounded-lg p-1.5 hover:bg-slate-100 transition" asChild>
              <button aria-label={SPECS.close[lang]}>
                <X className="h-5 w-5 text-slate-700" />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        <div className="p-6">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--brand-orange-bright)] to-[var(--brand-orange)] shadow-lg shadow-[var(--brand-orange)]/30"
                >
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="mt-5 text-2xl font-extrabold text-emerald-800">
                  {SPECS.successTitle[lang]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 max-w-sm mx-auto">
                  {SPECS.successBody[lang]}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800">
                  <Sparkles className="h-3.5 w-3.5" />
                  {SPECS.successContact[lang]}
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <Button
                    onClick={reset}
                    variant="outline"
                    className="border-emerald-600/40 bg-white text-emerald-800 hover:bg-emerald-50"
                  >
                    {SPECS.another[lang]}
                  </Button>
                  <Button
                    onClick={() => handleClose(false)}
                    className="bg-emerald-700 text-white hover:bg-emerald-600"
                  >
                    {SPECS.close[lang]}
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                id="specs-form"
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Product select */}
                <div>
                  <label className="text-xs font-semibold text-slate-800 mb-1.5 block">
                    {SPECS.productLabel[lang]} <span className="text-red-500">*</span>
                  </label>
                  <Select
                    value={selectedProduct}
                    onValueChange={setUserSelected}
                    required
                  >
                    <SelectTrigger className="w-full bg-white text-slate-900 border-slate-300">
                      <SelectValue placeholder={SPECS.productPlaceholder[lang]} />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-slate-900 border-slate-200">
                      {PRODUCTS.map((p) => (
                        <SelectItem key={p.id} value={p.id} className="text-slate-900 focus:bg-emerald-50 focus:text-slate-900">
                          {p.name[lang]} — {p.tagline[lang]}
                        </SelectItem>
                      ))}
                      <SelectItem value="general" className="text-slate-900 focus:bg-emerald-50 focus:text-slate-900">{SPECS.generalInquiry[lang]}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-800 mb-1.5 block">
                      {SPECS.nameLabel[lang]} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      name="name"
                      placeholder={SPECS.namePlaceholder[lang]}
                      className="bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-800 mb-1.5 block">
                      {SPECS.emailLabel[lang]} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      name="email"
                      type="email"
                      placeholder={SPECS.emailPlaceholder[lang]}
                      className="bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Company + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-800 mb-1.5 block">
                      {SPECS.companyLabel[lang]} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      name="company"
                      placeholder={SPECS.companyPlaceholder[lang]}
                      className="bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-800 mb-1.5 block">
                      {SPECS.phoneLabel[lang]} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      name="phone"
                      type="tel"
                      dir="ltr"
                      placeholder={SPECS.phonePlaceholder[lang]}
                      className="bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Preferred contact method */}
                <div>
                  <label className="text-xs font-semibold text-slate-800 mb-2 block">
                    {SPECS.contactMethodLabel[lang]}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {SPECS.contactMethods.map((m) => {
                      const Icon = m.id === "email" ? Mail : m.id === "whatsapp" ? MessageCircle : Phone;
                      const isActive = method === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMethod(m.id as typeof method)}
                          className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border p-3 transition ${
                            isActive
                              ? "border-emerald-600 bg-emerald-50 shadow-sm"
                              : "border-slate-300 bg-white hover:bg-slate-50"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              isActive ? "text-emerald-700" : "text-slate-500"
                            }`}
                          />
                          <span
                            className={`text-xs font-semibold ${
                              isActive ? "text-emerald-800" : "text-slate-700"
                            }`}
                          >
                            {m.label[lang]}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="method-dot"
                              className="h-1 w-1 rounded-full bg-emerald-600"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Required note */}
                <p className="text-[11px] text-slate-500">{SPECS.requiredNote[lang]}</p>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 bg-emerald-700 text-white hover:bg-emerald-600 disabled:opacity-70 gap-2 shadow-lg shadow-emerald-900/20"
                >
                  <Send className="h-4 w-4" />
                  {sending ? (lang === "en" ? "Sending…" : "جارٍ الإرسال…") : SPECS.submit[lang]}
                </Button>
                {error && (
                  <p className="text-xs text-red-500 text-center" role="alert">
                    {lang === "en"
                      ? `Sorry, your request could not be sent. Please email us at ${BRAND.email}.`
                      : `عذرًا، تعذّر إرسال طلبك. يرجى مراسلتنا على ${BRAND.email}.`}
                    {errorDetail && (
                      <span dir="ltr" className="block mt-1 opacity-80">({errorDetail})</span>
                    )}
                  </p>
                )}

                {/* Contact strip */}
                <div className="pt-4 mt-2 border-t border-slate-200 text-center">
                  <div className="text-xs text-slate-500 mb-1">
                    {lang === "en" ? "Or reach us directly:" : "أو تواصل معنا مباشرة:"}
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {BRAND.email}
                    </a>
                    <span className="text-slate-300">·</span>
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900"
                      dir="ltr"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {BRAND.phone}
                    </a>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </SheetContent>
    </Sheet>
  );
}
