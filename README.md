# Mehrad Ghadrdan — Portfolio

Production-ready engineering portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** (App Router) — SSG for all pages via `generateStaticParams`, so the whole site can be deployed as static output on any CDN.
- **TypeScript** (strict mode) — all content is typed; a malformed project or skill entry fails at build time, not in production.
- **Tailwind CSS** — design tokens (color, type, spacing) are defined once in `tailwind.config.ts` and `app/globals.css`.
- **next-themes** — dark mode via a `class` strategy, no flash-of-wrong-theme on load.

## Before you deploy

Fill in the placeholders in `lib/data/site.ts`:

```ts
email: '',      // your email
github: '',     // full GitHub URL
linkedin: '',   // full LinkedIn URL
location: '',
url: 'https://mehradghadrdan.dev', // update to your real domain — used in metadata, sitemap, JSON-LD
```

Until `email` is set, the contact form and email links render as inert placeholders rather than broken links — check `components/Contact.tsx` and `components/Footer.tsx` if you want different fallback behavior.

## Content architecture

All copy lives in `lib/data/*.ts`, separate from presentation components. To update your bio, skills, experience, or add a fourth project, edit the relevant data file — no component code needs to change. This is deliberate: it's the seam that lets this site later grow into a CMS-backed blog without a rewrite (swap the static import in a data file for a fetch call).

## Adding a project

Add an entry to the `projects` array in `lib/data/projects.ts` following the existing shape. The `/projects/[slug]` route and the homepage project list both pick it up automatically — no routing changes needed.

## Scripts

```bash
npm install
npm run dev        # local dev server
npm run build      # production build (static export of all routes)
npm run typecheck  # strict TypeScript check
npm run lint       # ESLint (next/core-web-vitals ruleset)
```

## Notable engineering decisions

- **Static generation over client fetching**: every route, including project case studies, is statically generated at build time (`generateStaticParams`). This is what gets Lighthouse scores near 100 without any custom performance work — there's no client-side data fetch blocking first paint.
- **No client-side JS beyond the theme toggle and the (optional) contact form**: the rest of the page is static HTML/CSS. Minimal JavaScript was a stated goal, not an afterthought.
- **`next/font`** self-hosts Google Fonts and eliminates render-blocking font requests, with `display: swap` so text never becomes invisible while a webfont loads.
- **CSP and security headers** are set in `next.config.mjs` for every route, not added post-hoc per page.
- **Accessibility**: every interactive element has a visible focus ring, a skip link is present, all sections are landmark-labeled, and `prefers-reduced-motion` is respected in `globals.css`.

## Extending later (by design, not by accident)

- **Blog / CMS**: add `app/blog/[slug]/page.tsx` following the same pattern as `app/projects/[slug]/page.tsx`; swap the static `projects` array for a CMS fetch when ready.
- **Dark mode**: already implemented — nothing further required.
- **Analytics / auth**: both are typically added at the root layout or via middleware; the current layout has no assumptions that would conflict with either.
