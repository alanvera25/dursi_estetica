'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Logo } from '@/components/brand/Logo';
import { site } from '@/lib/site';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const prefix = locale === 'en' ? '/en' : '';

  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-[1440px] px-6 pb-10 pt-24 lg:px-10 lg:pt-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-6">
            <Logo className="text-bone" variant="stacked" />
            <p className="mt-10 max-w-sm text-sm leading-relaxed text-bone/70">
              {t('tagline')}
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h4 className="smallcaps text-bone/60">{t('links')}</h4>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              {(['philosophy', 'treatments', 'about', 'space', 'contact'] as const).map(
                (id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="font-display text-lg italic text-bone/85 transition-colors hover:text-sage"
                    >
                      {tNav(id)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <h4 className="smallcaps text-bone/60">{t('legal')}</h4>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href={`${prefix}/aviso-legal`}
                  className="transition-colors hover:text-sage"
                >
                  {t('legalAviso')}
                </Link>
              </li>
              <li>
                <Link
                  href={`${prefix}/privacidad`}
                  className="transition-colors hover:text-sage"
                >
                  {t('legalPriv')}
                </Link>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sage"
                >
                  {site.handle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-sage"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant wordmark at bottom */}
        <div className="mt-24 border-t border-bone/15 pt-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div
              className="pointer-events-none select-none font-sans font-bold leading-none tracking-[0.04em] text-bone/10"
              style={{ fontSize: 'clamp(3rem,11vw,11rem)' }}
              aria-hidden
            >
              DURSI
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-xs text-bone/50 md:flex-row md:items-center md:justify-between">
            <p>{t('copy', { year: new Date().getFullYear() })}</p>
            <p className="italic">{t('credits')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
