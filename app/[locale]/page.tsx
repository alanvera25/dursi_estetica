import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { Treatments } from '@/components/sections/Treatments';
import { About } from '@/components/sections/About';
import { Location } from '@/components/sections/Location';
import { Contact } from '@/components/sections/Contact';
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
      <Philosophy />
      <Treatments />
      <About />
      <Location />
      <Contact />
      <Footer />
    </>
  );
}
