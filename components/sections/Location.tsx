'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export function Location() {
  const t = useTranslations('space');
  const tContact = useTranslations('contact');

  return (
    <section id="space" className="relative overflow-hidden bg-ink py-28 text-bone lg:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dot" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="smallcaps text-bone/60">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.6rem)] font-light leading-[1.05] tracking-[-0.01em]">
              {t('heading')}{' '}
              <span className="italic text-sage">{t('headingAccent')}</span>
            </h2>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-bone/75">
              {t('body')}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 lg:mt-24 lg:gap-10">
          {/* image */}
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-sage/20">
              <Image
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80"
                alt={t('eyebrow')}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* details */}
          <Reveal delay={0.15} className="col-span-12 flex flex-col gap-8 md:col-span-5">
            <DetailRow label={t('addressLabel')}>
              <span className="font-display text-xl italic leading-tight">
                {site.address.street}
              </span>
              <span className="text-sm text-bone/70">
                {site.address.postal} · {site.address.city}
              </span>
              <a
                href={site.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="smallcaps mt-2 inline-flex items-center gap-2 border-b border-bone/50 pb-1 text-bone transition-all hover:border-bone"
              >
                {t('howTo')} →
              </a>
            </DetailRow>

            <DetailRow label={t('hoursLabel')}>
              <span className="font-display text-lg italic">
                {site.hours.days}
              </span>
              <span className="num-chip text-base">{site.hours.weekdays}</span>
            </DetailRow>

            <DetailRow label={t('contactLabel')}>
              <a
                href={site.whatsapp(tContact('prefill'))}
                target="_blank"
                rel="noopener noreferrer"
                className="num-chip text-lg underline-offset-4 transition-colors hover:text-sage hover:underline"
              >
                {site.phone}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bone/70 transition-colors hover:text-sage"
              >
                {site.handle}
              </a>
            </DetailRow>
          </Reveal>
        </div>

        {/* map embed */}
        <Reveal delay={0.2} className="mt-16 overflow-hidden border border-bone/15">
          <iframe
            title="Ubicación D’Ursi Estética"
            src={site.address.mapsEmbed}
            className="h-[360px] w-full grayscale-[30%] md:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

function DetailRow({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 border-t border-bone/20 pt-4">
      <span className="smallcaps text-bone/50">{label}</span>
      <div className="mt-1 flex flex-col gap-1">{children}</div>
    </div>
  );
}
