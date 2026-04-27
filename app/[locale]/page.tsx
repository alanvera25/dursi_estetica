import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Treatments } from '@/components/sections/Treatments';
import { About } from '@/components/sections/About';
import { Location } from '@/components/sections/Location';
import { Footer } from '@/components/sections/Footer';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Treatments />
      <About />
      <Location />
      <Footer />
    </>
  );
}
