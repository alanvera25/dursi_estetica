'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LogoMark } from '@/components/brand/LogoMark';
import { LangSwitcher } from './LangSwitcher';
import { TreatmentsMenu } from './TreatmentsMenu';
import { site } from '@/lib/site';

const sections = ['philosophy', 'treatments', 'about', 'space', 'contact'] as const;

export function Nav() {
  const t = useTranslations('nav');
  const tPrefill = useTranslations('contact');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled ? 'backdrop-blur-md bg-bone/75 border-b border-ink/10' : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:h-20 lg:px-10">
          <Link href="#top" aria-label="D’Ursi Estética" className="flex items-center text-ink">
            <LogoMark className="h-7 lg:h-8" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {sections.map((id) =>
              id === 'treatments' ? (
                <TreatmentsMenu key={id} active={active === 'treatments'} />
              ) : (
                <a
                  key={id}
                  href={`#${id}`}
                  className={clsx(
                    'smallcaps relative py-1 transition-colors',
                    active === id ? 'text-ink' : 'text-ink/55 hover:text-ink'
                  )}
                >
                  {t(id)}
                  <span
                    className={clsx(
                      'absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-500',
                      active === id ? 'w-full' : 'w-0'
                    )}
                  />
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LangSwitcher />
            <a
              href={site.whatsapp(tPrefill('prefill'))}
              target="_blank"
              rel="noopener noreferrer"
              className="smallcaps border border-ink px-4 py-2 transition-colors hover:bg-ink hover:text-bone"
            >
              {t('book')}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="relative block h-[9px] w-6">
              <span
                className={clsx(
                  'absolute left-0 right-0 h-px bg-ink transition-all duration-300',
                  open ? 'top-1 rotate-45' : 'top-0'
                )}
              />
              <span
                className={clsx(
                  'absolute left-0 right-0 h-px bg-ink transition-all duration-300',
                  open ? 'top-1 -rotate-45' : 'bottom-0'
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-30 bg-sage transition-all duration-500 lg:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="grain absolute inset-0" aria-hidden />
        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-6">
            {sections.map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4"
              >
                <span className="num-chip text-xs text-ink/50">0{i + 1}</span>
                <span className="font-display text-4xl font-light text-ink transition-transform duration-500 group-hover:translate-x-2">
                  {t(id)}
                </span>
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <LangSwitcher />
            <a
              href={site.whatsapp(tPrefill('prefill'))}
              target="_blank"
              rel="noopener noreferrer"
              className="smallcaps border border-ink px-4 py-2"
              onClick={() => setOpen(false)}
            >
              {t('book')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
