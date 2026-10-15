# AntA Website — Source Code

This archive contains the full Next.js 16 + TypeScript + Tailwind CSS 4 source
for the AntA by MK Technologies brand website.

## Tech stack
- Next.js 16 (App Router) + React 19
- TypeScript 5
- Tailwind CSS 4 + shadcn/ui (New York style) + Lucide icons
- framer-motion 12 (animations: scroll-reveal, flip cards, drag carousel)
- Noto Kufi Arabic (RTL display) + Archivo (Latin display) + Inter (body)
- 16 standalone PDFs (8 EN + 8 AR) — bilingual company profile + 7 product brochures

## Project structure
- `src/app/` — App Router root: `layout.tsx`, `page.tsx`, `globals.css`
- `src/components/` — All React components:
  - `Navbar.tsx` + `Hero.tsx` + `BrandBanner.tsx` + `About.tsx`
  - `Solutions.tsx` (Curriculum with flip-on-hover product cards)
  - `AntACareSpotlight.tsx` (5-word philosophy + 8-step patient journey)
  - `MemberStories.tsx` (drag-to-swipe carousel)
  - `Gallery.tsx` (27 images across 7 products + product filter)
  - `WhyAntA.tsx` + `ComingSoon.tsx` + `Contact.tsx` + `Footer.tsx`
  - `SpecsSheet.tsx` + `SpecsProvider.tsx` (Request Specs form sheet)
  - `LanguageProvider.tsx` (bilingual EN/AR + RTL context)
  - `StickyCTA.tsx` + `GrainOverlay.tsx`
  - `Reveal.tsx` (framer-motion stagger reveal wrappers)
  - `ui/` (shadcn/ui component library — 49 components)
- `src/lib/i18n.ts` — All bilingual content (single source of truth)
- `public/anta-logo.png` — Original brand logo (deep teal + mint)
- `public/marketing/` — 27 images (10 AntA Care social campaign + 5 AI-generated
  branded visuals + 12 real HR screenshots from the 5 HR presentations)
- `public/favicon.png` — Same as logo
- `scripts/build_all_pdfs.py` — Regenerates all 16 PDFs
- `scripts/generate-product-images.ts` — Regenerates AI branded visuals
- `prisma/schema.prisma` — Database schema (if you enable Prisma)

## Key features
1. Pure-black + dark-teal + mint-green palette (sampled from the actual AntA logo)
2. Bold condensed typography (Archivo + Noto Kufi Arabic) — minimal whitespace
3. Subtle grain-texture parallax drift on scroll
4. 3D flip-on-hover product cards reveal "certifications" + signature use case
5. Pulsing "Book a Demo" sticky CTA bar that snaps in after scrolling past hero
6. Drag-to-swipe Member Stories carousel with rubber-band spring easing
7. Product filter in Gallery (All + 7 products)
8. Bilingual EN/AR with full RTL support (toggle in navbar)
9. Request Specs sheet — 4 mandatory fields + preferred contact method (Email/WhatsApp/Phone)
   → on submit: "Thank you! Your request has been received. The full product
   specifications will be shared with you via email shortly."
10. All 7 products enriched with detailed features from the actual product specs:
    - AntA Care: clinic ecosystem (from the social campaign docx + marketing pack PDF)
    - AntA Shop: 8-module clothing-retail ERP (PUR/INV/POS/CRM/BR/FIN/ECM/RPT) + ETA e-invoicing
    - AntA Fleet: 11 core modules + 13 automated workflows (WF-01 to WF-13)
    - AntA Rental Manager: dual-mode system (Compound + Private Unit)
    - AntA Home: smart home management
    - AntA Car: private car management
    - AntA HR: 5 sub-systems (Document Creator, Renewals Workflow, Annual Leave Planner,
      Employee Assets Book, MK Archive System)

## How to run
1. `npm install` or `bun install`
2. `npm run dev` or `bun run dev`
3. Open http://localhost:3000

## How to regenerate PDFs
`python3 scripts/build_all_pdfs.py` — requires Node.js + the `pagedjs` package
installed (`npm install pagedjs`). Outputs 16 PDFs to `/home/z/my-project/download/`:
- MK-Technologies-Company-Profile-EN.pdf + AR.pdf
- brochures-en/AntA-{Care,Shop,Fleet,Rental,Home,Car,HR}-Brochure-EN.pdf
- brochures-ar/AntA-{Care,Shop,Fleet,Rental,Home,Car,HR}-Brochure-AR.pdf

## How to regenerate AI branded visuals
`npx tsx scripts/generate-product-images.ts` — requires z-ai-web-dev-sdk installed.
Generates 6 product images (one per non-Care product) at 1024×1024.

— Built by MK Technologies. "ALL IS ABOUT YOU, ALL IS AROUND YOU انتا"
