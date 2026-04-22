'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { site } from '@/lib/site';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative overflow-hidden bg-taupe py-28 text-bone lg:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="smallcaps text-bone/70">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-8">
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em]">
              {t('heading')}{' '}
              <span className="italic">{t('headingAccent')}</span>
            </h2>
            <p className="mt-8 max-w-lg text-[0.98rem] leading-relaxed text-bone/80">
              {t('body')}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 lg:mt-24 lg:gap-10">
          <Reveal className="col-span-12 flex flex-col items-start gap-8 lg:col-span-8 lg:col-start-5">
            <WhatsAppButton
              message={t('prefill')}
              variant="outline"
              className="border-bone text-bone hover:bg-bone hover:text-taupe"
            >
              {t('whatsapp')} · {site.phone}
            </WhatsAppButton>

            <div className="flex flex-wrap gap-8">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                <span className="smallcaps text-bone/60">{t('instagram')}</span>
                <span className="mt-1 font-display text-lg italic transition-transform duration-500 group-hover:translate-x-1">
                  {site.handle} →
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex flex-col"
              >
                <span className="smallcaps text-bone/60">{t('email')}</span>
                <span className="mt-1 font-display text-lg italic transition-transform duration-500 group-hover:translate-x-1">
                  {site.email} →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
