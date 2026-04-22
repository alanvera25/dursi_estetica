import type { Metadata, Viewport } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat-alt',
  display: 'swap'
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap'
});

export const viewport: Viewport = {
  themeColor: '#CBD3C5',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dursi-estetica.vercel.app'),
  title: {
    default: 'D’Ursi Estética · Medicina estética consciente en Buenos Aires',
    template: '%s · D’Ursi Estética'
  },
  description:
    'Consultorio de medicina estética y nutrición integral en Palermo. Tratamientos faciales personalizados — botox, ácido hialurónico, HIFU, peeling, bioestimuladores. Resultados naturales y seguros.',
  keywords: [
    'medicina estética',
    'Dursi Estética',
    'Palermo',
    'Buenos Aires',
    'botox',
    'ácido hialurónico',
    'HIFU',
    'armonización facial',
    'plasma rico en plaquetas',
    'bioestimuladores'
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'D’Ursi Estética',
    description:
      'Medicina estética consciente — tratamientos faciales personalizados en Buenos Aires.',
    siteName: 'D’Ursi Estética'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D’Ursi Estética',
    description:
      'Medicina estética consciente — tratamientos faciales personalizados en Buenos Aires.'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
