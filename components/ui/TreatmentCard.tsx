'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { Treatment } from '@/lib/treatments';
import { site } from '@/lib/site';

interface TreatmentCardProps {
  t: Treatment;
  className?: string;
}

export function TreatmentCard({ t, className }: TreatmentCardProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const tr = useTranslations(`treatments.items.${t.key}`);
  const trRoot = useTranslations('treatments');
  const trContact = useTranslations('contact');

  const name = tr('name');
  const short = tr('short');
  const long = tr('long');
  const price = tr('price');
  const duration = tr('duration');
  const bullets = tr.raw('bullets') as string[];

  // Auto-expand when navigating to #treatment-{key}
  useEffect(() => {
    const check = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '');
      if (hash === `treatment-${t.key}`) {
        setOpen(true);
        requestAnimationFrame(() => {
          ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, [t.key]);

  return (
    <motion.article
      ref={ref as any}
      id={`treatment-${t.key}`}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      className={clsx(
        'group relative flex flex-col scroll-mt-28 border-t border-ink/15 py-4',
        className
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <div className="flex flex-1 items-start gap-6">
          <span className="num-chip mt-1 text-xs text-ink/40">{t.index}</span>
          <div className="flex-1">
            <h3 className="font-display text-xl font-light leading-tight text-ink md:text-2xl">
              {name}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/60">{short}</p>
            {(price || duration) && (
              <p className="mt-3 text-sm font-semibold text-ink/85">
                {price}
                {price && duration && <span className="mx-2 font-light text-ink/30">|</span>}
                {duration && <span className="font-normal text-ink/50">{duration}</span>}
              </p>
            )}
          </div>
        </div>
        <div className="mt-2 flex shrink-0 items-center">
          <span
            className={clsx(
              'relative flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 transition-all duration-500',
              open && 'rotate-45 border-ink bg-ink text-bone'
            )}
          >
            <span className="absolute h-px w-3 bg-current" />
            <span className="absolute h-3 w-px bg-current" />
          </span>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="mt-6 flex flex-col gap-4">
          <p className="max-w-2xl pl-[2.5rem] text-base leading-relaxed text-ink/75 md:pl-[3.5rem]">
            {long}
          </p>
          {bullets.length > 0 && (
            <ul className="flex flex-col gap-1.5 pl-[2.5rem] md:pl-[3.5rem]">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink/70">
                  <span className="mt-[3px] shrink-0 text-ink/30">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-end">
            <a
              href={site.whatsapp(trContact('prefillTreatment', { name }))}
              target="_blank"
              rel="noopener noreferrer"
              className="smallcaps border-b border-ink pb-1 pr-0 text-ink transition-all hover:pr-2"
            >
              {trRoot('askInfo')} →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
