# AntA Website — Cloudflare Pages & Netlify Deployment Guide

This guide solves the build error you're seeing on Cloudflare Pages and shows you the **two ways** to deploy — pick the one that matches what you want.

---

## WHY YOUR BUILD FAILED

You uploaded the source code ZIP to Cloudflare Pages and it tried to run `next build` (auto-detected Next.js). It failed with:

```
Error: Turbopack build failed with 24 errors:
Error: Module not found: Can't resolve '@/components/WhyAntA'
Error: Module not found: Can't resolve '@/components/ui/input'
Error: Module not found: Can't resolve '@/components/ui/select'
Error: Module not found: Can't resolve '@/lib/i18n'
...
```

**Cause:** The source ZIP I previously gave you had files nested under `anta-website/src/...` instead of `src/...` at the root. When you pushed it to GitHub and Cloudflare ran `next build`, the `@/` path alias (which maps to `./src/*` relative to the project root) couldn't find any files — they were one level too deep.

**Fix:** I've rebuilt two clean ZIPs:

| ZIP | What changed |
|-----|--------------|
| **`AntA-website-source-netlify-cloudflare.zip`** (35 MB) | Files at the **root** (no `anta-website/` prefix) + `next.config.ts` already set to `output: "export"` + `netlify.toml` + `.gitignore` + `.node-version`. Push to GitHub → Cloudflare auto-builds it correctly. |
| **`AntA-website-static-deploy.zip`** (16 MB) | Pre-built static site with `index.html` at the root. **No build step needed on Cloudflare** — direct upload only. ⭐ Easiest option. |

---

## OPTION 1 — DIRECT UPLOAD (RECOMMENDED, NO BUILD, WORKS IN 1 MINUTE)

This bypasses Cloudflare's build step entirely. You just upload the pre-built static files.

### Steps

1. Download **`AntA-website-static-deploy.zip`** (16 MB) from `/home/z/my-project/download/`.
2. **Unzip it** to a folder on your computer. You'll see `index.html`, `_next/`, `marketing/`, etc. at the top level.
3. Go to **https://dash.cloudflare.com** → sign up (free, no credit card).
4. **Workers & Pages → Create application → Pages → Upload assets**.
5. Project name: `anta-website` (or anything you want).
6. **Drag the contents of the unzipped folder** (the files, not the folder itself) onto the upload area.
7. Click **Deploy**.
8. Live in ~30 seconds at `https://anta-website.pages.dev`.

### Why this is the best option
- ✅ No build step = no build errors
- ✅ No dependencies to install
- ✅ Deploys in ~30 seconds
- ✅ Works on Cloudflare Pages, Netlify, Vercel, Surge, GitHub Pages — anywhere static

---

## OPTION 2 — GIT-CONNECTED AUTO-REBUILD (FOR ONGOING EDITS)

If you want every code change to auto-deploy when you push to GitHub, use this option. Use the **rebuilt source ZIP** with files at the root.

### Step 1 — Push the source to GitHub

1. Download **`AntA-website-source-netlify-cloudflare.zip`** (35 MB) from `/home/z/my-project/download/`.
2. **Unzip it** to a folder on your computer. The folder should contain `package.json`, `src/`, `public/`, etc. directly at the top level (NOT inside an `anta-website/` subfolder).
3. Open a terminal in that folder:
   ```bash
   cd /path/to/unzipped-folder
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOURNAME/anta-website.git
   git push -u origin main
   ```
   (Create the empty `anta-website` repo on GitHub.com first via the web UI.)

### Step 2 — Connect to Cloudflare Pages

1. Go to **https://dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git**.
2. Pick your `anta-website` repo.
3. **Build settings:**
   - **Framework preset:** None (don't pick "Next.js" — that triggers Next-on-Pages, which is for SSR, not static)
   - **Build command:** `npm run build` (or `bun run build` if your environment uses Bun)
   - **Build output directory:** `out`
   - **Root directory:** `/` (leave blank — files are at the repo root)
4. **Environment variables:** None needed.
5. Click **Save and Deploy**.
6. First build takes ~2 minutes. Live at `https://anta-website.pages.dev`.

### Why this works
- ✅ Files at the repo root = the `@/` path alias resolves correctly
- ✅ `next.config.ts` has `output: "export"` = produces static `/out` folder
- ✅ `trailingSlash: true` = every route becomes a folder with `index.html`
- ✅ `images.unoptimized: true` = no server-side image optimization needed
- ✅ `netlify.toml` and `_redirects` are included for SPA-style fallback

---

## WHAT'S IN EACH ZIP

### `AntA-website-static-deploy.zip` (16 MB) — for direct upload

```
├── 404.html
├── _headers               ← Cloudflare/Netlify cache headers
├── _redirects             ← SPA fallback rule
├── _next/static/          ← CSS, JS, fonts (auto-generated)
├── anta-logo.png          ← brand logo
├── favicon.png
├── index.html             ← ⭐ THE FILE YOUR HOST WAS LOOKING FOR
├── marketing/             ← 27 product images
├── netlify.toml           ← Netlify config
└── robots.txt
```

### `AntA-website-source-netlify-cloudflare.zip` (35 MB) — for Git-connected CI/CD

```
├── .gitignore
├── .node-version          ← tells Cloudflare/Netlify to use Node 20
├── .nvmrc                 ← same, for nvm users
├── Caddyfile
├── DEPLOYMENT-GUIDE.md    ← this file
├── README.md
├── components.json        ← shadcn/ui config
├── db/
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts         ← ALREADY SET to output: "export"
├── package.json
├── postcss.config.mjs
├── prisma/
├── public/
│   ├── _headers          ← Cloudflare cache headers
│   ├── _redirects        ← SPA fallback
│   ├── anta-logo.png
│   ├── favicon.png
│   └── marketing/         ← 27 images
├── scripts/               ← build scripts (PDFs, images)
├── src/
│   ├── app/
│   │   ├── globals.css   ← dark teal + mint palette
│   │   ├── layout.tsx    ← fonts, metadata, providers
│   │   └── page.tsx      ← page composition
│   ├── components/        ← 16 main components + 49 shadcn/ui
│   └── lib/
│       ├── i18n.ts        ← ALL BILINGUAL TEXT (single source of truth)
│       ├── utils.ts
│       └── db.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## FREE HOSTING OPTIONS — COMPARISON

| Host | Free bandwidth | Free builds/mo | Best feature |
|------|----------------|----------------|--------------|
| **Cloudflare Pages** ⭐ | **Unlimited** | 500 | Fastest global CDN, unlimited bandwidth |
| **Netlify** | 100 GB/mo | 300 min | Easiest drag-and-drop at https://app.netlify.com/drop |
| **Vercel** | 100 GB/mo | 6000 min | Made by Next.js team — best Next.js experience |
| **GitHub Pages** | Unlimited | N/A | Free, but repo must be public |
| **Render** | 100 GB/mo | Limited | Has free databases too |
| **Surge.sh** | Unlimited | N/A | `npm i -g surge` then `surge` — done |

**My recommendation for you:** Cloudflare Pages (Option 1 — direct upload). Unlimited bandwidth on the free tier, no build errors possible, deploys in 30 seconds.

---

## HOW TO EDIT SITE TEXT AFTER DEPLOYING

All bilingual text is in **one file**: `src/lib/i18n.ts`. To edit:

### If you used Option 1 (direct upload)
1. Edit `src/lib/i18n.ts` locally (it's in the source ZIP — `AntA-website-source-netlify-cloudflare.zip`).
2. Rebuild: `npm install && npm run build` (produces a new `out/` folder).
3. Re-zip the `out/` folder.
4. Re-upload to Cloudflare Pages (overwrites the previous deployment).

### If you used Option 2 (Git-connected)
1. Go to your GitHub repo on github.com.
2. Open `src/lib/i18n.ts` in the web editor.
3. Edit the text (every value is `{ en: "...", ar: "..." }`).
4. Commit the change.
5. Cloudflare auto-rebuilds and redeploys in ~2 minutes.

### Where each section's text lives in `i18n.ts`

| Line | Export | Section |
|------|--------|---------|
| 19 | `BRAND` | Company name, taglines, mission, vision, email, phone |
| 56 | `NAV` | Navbar menu items |
| 67 | `HERO` | Hero headline, sub-headline, CTAs, pillars, marquee |
| 116 | `ABOUT` | About title, paragraphs, stats, mission/vision |
| 135 | `PRODUCTS` | All 7 products: name, tagline, description, features, signature |
| 334 | `SPOTLIGHT` | AntA Care: 5-word philosophy, 8-step patient journey, highlights |
| 411 | `GALLERY` | Gallery title, subtitle |
| 422 | `GALLERY_IMAGES` | The 27 images |
| 460 | `WHY` | Why AntA: 6 reasons cards |
| 513 | `ROADMAP` | Coming Soon: 6 items |
| 536 | `CONTACT` | Contact: title, form labels, success message |
| 558 | `SPECS` | Request Specs form: title, labels, contact methods, success |
| 604 | `FOOTER` | Footer: tagline, copyright, links, specs CTA |
| 643 | `CURRICULUM` | Curriculum: 4 product groups |
| 711 | `MEMBER_STORIES` | 8 transformation pairs |

### Important rules
1. Keep **both** `en` and `ar` for every text
2. If text contains `"`, wrap the outer string in `'`: `'text with "quoted" word'`
3. Don't translate code identifiers like `productId: "care"`
4. After editing: rebuild + re-upload (Option 1) or just commit (Option 2)

---

## TROUBLESHOOTING

### "I see a blank page after upload"

**Cause:** Files were uploaded inside a subfolder, not at the root.
**Fix:** Re-upload with `index.html` directly at the publish directory root.

### "404 on _next/static/*.js files"

**Cause:** The `_next/` folder wasn't uploaded.
**Fix:** Make sure to upload ALL files including `_next/`.

### "Images don't load"

**Cause:** The `marketing/` folder wasn't uploaded.
**Fix:** Upload the entire unzipped folder contents.

### "Cloudflare Pages build fails with module not found"

**Cause:** Files are nested inside a subfolder in your repo (e.g. `anta-website/src/...` instead of `src/...`).
**Fix:** Use the rebuilt `AntA-website-source-netlify-cloudflare.zip` — files are now at the root, no nested folder.

### "Cloudflare Pages build fails with 'export const dynamic' error"

**Cause:** There's an `/api` route in the source, which doesn't work with `output: "export"`.
**Fix:** Delete the `src/app/api/` folder before pushing to Git. (Already done in the rebuilt ZIP.)

### "Cloudflare Pages auto-detected Next.js (Next-on-Pages)"

**Cause:** Cloudflare's "Next.js" framework preset is for SSR, not static.
**Fix:** In Cloudflare Pages settings → Framework preset: **None**. Then set Build command: `npm run build`, Build output: `out`.

---

Built by MK Technologies · "ALL IS ABOUT YOU, ALL IS AROUND YOU انتا"
