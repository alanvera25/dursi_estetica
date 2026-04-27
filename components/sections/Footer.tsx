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
      <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-14 lg:px-10 lg:pt-20">
        <div className="flex flex-wrap justify-center gap-16 border-t border-bone/15 pt-10 lg:pt-14">
          <div>
            <h4 className="smallcaps text-bone/60">{t('links')}</h4>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              {(['treatments', 'about', 'contact'] as const).map(
                (id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="transition-colors hover:text-sage"
                    >
                      {tNav(id)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
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

        <div className="mt-12 border-t border-bone/15 pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <Logo className="h-5 text-bone" variant="inline" onDark />
              <span className="text-xs text-bone/50">{t('copy', { year: new Date().getFullYear() })}</span>
            </div>
            <p className="text-xs italic text-bone/50">{t('credits')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
