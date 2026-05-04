'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Mail } from 'lucide-react';
import { TikTokIcon } from '@/components/ui/TikTokIcon';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { site } from '@/lib/site';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative overflow-hidden bg-taupe py-16 text-bone lg:py-24">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="flex flex-col items-start gap-10">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em]">
            {t('heading')}{' '}
            <span className="italic">{t('headingAccent')}</span>
          </h2>

          <WhatsAppButton
            message={t('prefill')}
            variant="outline"
            className="border-bone text-bone hover:bg-bone hover:text-taupe"
          >
            {t('whatsapp')} · {site.phone}
          </WhatsAppButton>

          <div className="flex flex-wrap gap-6">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-bone/75 transition-colors hover:text-bone"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/30 transition-colors group-hover:border-bone">
                <Instagram size={16} strokeWidth={1.5} />
              </span>
              <span className="text-sm">Instagram</span>
            </a>

            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-bone/75 transition-colors hover:text-bone"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/30 transition-colors group-hover:border-bone">
                <TikTokIcon size={16} />
              </span>
              <span className="text-sm">TikTok</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-3 text-bone/75 transition-colors hover:text-bone"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-bone/30 transition-colors group-hover:border-bone">
                <Mail size={16} strokeWidth={1.5} />
              </span>
              <span className="text-sm">{site.email}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
