import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import { Nav } from '@/components/ui/Nav';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Nav />
      <main>{children}</main>
      <BusinessSchema />
    </NextIntlClientProvider>
  );
}

function BusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'D’Ursi Estética',
    image: 'https://dursi-estetica.vercel.app/opengraph-image',
    '@id': 'https://dursi-estetica.vercel.app',
    url: 'https://dursi-estetica.vercel.app',
    telephone: '+5491166021077',
    email: 've.centroestetica@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Manuel Ricardo Trelles 2311',
      addressLocality: 'Ciudad Autónoma de Buenos Aires',
      postalCode: 'C1416',
      addressCountry: 'AR'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:00',
        closes: '19:00'
      }
    ],
    sameAs: ['https://www.instagram.com/dursi.estetica/']
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
