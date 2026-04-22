# D'Ursi Estética — sitio web

Sitio institucional de D'Ursi Estética, consultorio de medicina estética en Palermo, Buenos Aires.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + CSS variables
- Framer Motion
- next-intl (ES / EN)
- next/font (Montserrat Alternates + Cormorant Garamond)

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Build / producción

```bash
npm run build
npm run start
```

## Deploy

Recomendado Vercel:

1. `vercel` CLI o conectar repo en dashboard vercel.com
2. Variables de entorno: `NEXT_PUBLIC_SITE_URL=https://dursi-estetica.vercel.app` (o dominio custom)
3. Framework preset: **Next.js**

## Estructura

- `app/` — App Router, layouts, páginas legales, sitemap, OG image
- `app/[locale]/` — páginas localizadas (ES default, EN con prefijo /en)
- `components/brand/` — Logo, Isotipo, LogoMark (SVG inline)
- `components/sections/` — Hero, Philosophy, Treatments, About, Location, Contact, Footer
- `components/ui/` — Nav, LangSwitcher, WhatsAppButton, TreatmentCard, Reveal, GrainTexture
- `lib/site.ts` — datos del consultorio (dirección, contacto, matrículas)
- `lib/treatments.ts` — listado y categorización de tratamientos
- `messages/` — textos ES/EN

## Editar contenido

- **Tratamientos**: `messages/es.json` y `messages/en.json` → `treatments.items.*`
- **Bios**: `messages/*.json` → `about.*Bio`
- **Contacto/horarios/dirección**: `lib/site.ts`
- **Paleta y tipografía**: `tailwind.config.ts` + `app/layout.tsx`

## Fotografía

Las fotos son placeholders de Unsplash. Reemplazar con sesión profesional:

- About — fotos profesionales de Vanina y Estefanía (aspect 4:5)
- Location — foto interior del local (aspect 4:3)

## Pendientes

- Logo SVG: si tenés el SVG original del brand book, reemplazar `components/brand/Isotype.tsx`
- Fotos reales
- Favicon (actualmente default de Next)
- Dominio propio
