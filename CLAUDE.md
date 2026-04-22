# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Next dev server on :3000
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # next lint (ESLint w/ eslint-config-next)
```

No test suite configured.

Env: `NEXT_PUBLIC_SITE_URL` (used as `metadataBase` in `app/layout.tsx`; falls back to `https://dursi-estetica.vercel.app`).

## Architecture

Single-page marketing site for a Buenos Aires aesthetic medicine clinic. Next.js 14 App Router, TypeScript strict, Tailwind, `next-intl` for ES/EN, Framer Motion for animation. Path alias `@/*` → repo root.

### Routing & i18n

- Locales declared in `i18n/request.ts` (`es` default, `en`). `defaultLocale` = `es`.
- `middleware.ts` uses `next-intl` with `localePrefix: 'as-needed'` and `localeDetection: false` → ES at `/`, EN at `/en`. Matcher excludes `_next`, `api`, files with extensions.
- `app/[locale]/layout.tsx` calls `setRequestLocale`, wraps children in `NextIntlClientProvider`, renders global `<Nav>` + JSON-LD `MedicalBusiness` schema. `generateStaticParams` prerenders both locales.
- Root `app/layout.tsx` loads Montserrat Alternates + Cormorant Garamond via `next/font` (CSS vars `--font-montserrat-alt`, `--font-cormorant`) and defines site-wide metadata/OG.
- Home (`app/[locale]/page.tsx`) composes the section stack: Hero → Philosophy → Treatments → About → Location → Contact → Footer. Legal pages live in `app/[locale]/aviso-legal` and `app/[locale]/privacidad`.
- SEO plumbing: `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`.

### Content model

All user-visible copy lives in `messages/{es,en}.json` — **never hardcode strings in components**. Tailwind's `content` globs include `messages/**/*.json` so class names inside JSON still trigger generation.

Structured data lives in `lib/`:
- `lib/site.ts` — clinic name, contact, address, hours, professionals/licenses, `whatsapp(msg)` URL builder. Single source of truth for contact info and JSON-LD.
- `lib/treatments.ts` — ordered `treatments[]` with `key`, `category` (`faciales` | `capilar` | `corporales` | `consultas`), and display `index`. Per-treatment copy (title, description, etc.) is keyed by `TreatmentKey` in `messages/*.json` under `treatments.items.*`. Adding a treatment = new entry here **plus** matching entries in both locale files.

### Components

- `components/sections/` — page sections, each self-contained (reads copy via `useTranslations`).
- `components/ui/` — `Nav`, `LangSwitcher`, `TreatmentCard`, `TreatmentsMenu`, `WhatsAppButton`, `Reveal` (Framer scroll-in wrapper), `GrainTexture` (overlay).
- `components/brand/` — inline-SVG `Logo`, `Isotype`, `LogoMark`.

### Styling

- `tailwind.config.ts` defines the brand palette (`ink` #2B4533, `sage` #CBD3C5, `bone` #F4F4F4, `taupe` #A08D84 + `ink-*`/`bone-*` opacity tokens), custom fluid display sizes (`display-xl/lg/md`, `eyebrow`), letter-spacing (`widest-2`, `widest-3`), and keyframe animations (`draw`, `float`, `scroll-hint`). Fonts are bound to `font-sans` / `font-display` via the CSS vars above.
- `next.config.js` whitelists Unsplash (`images.unsplash.com`, `plus.unsplash.com`) for `next/image` — the About/Location photos are still placeholders from there.
