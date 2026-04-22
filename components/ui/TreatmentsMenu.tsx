'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { treatments, categories, type TreatmentCategory } from '@/lib/treatments';

interface TreatmentsMenuProps {
  active: boolean;
  onNavigate?: () => void;
}

export function TreatmentsMenu({ active, onNavigate }: TreatmentsMenuProps) {
  const t = useTranslations('treatments');
  const tNav = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  const handleItemClick = () => {
    setOpen(false);
    onNavigate?.();
  };

  const byCategory: Record<TreatmentCategory, typeof treatments> = {
    faciales: treatments.filter((x) => x.category === 'faciales'),
    capilar: treatments.filter((x) => x.category === 'capilar'),
    corporales: treatments.filter((x) => x.category === 'corporales'),
    consultas: treatments.filter((x) => x.category === 'consultas')
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          'smallcaps relative py-1 transition-colors',
          active || open ? 'text-ink' : 'text-ink/55 hover:text-ink'
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {tNav('treatments')}
        <span
          className={clsx(
            'absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-500',
            active || open ? 'w-full' : 'w-0'
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-20 z-50 -translate-x-1/2"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className="overflow-hidden border border-ink/15 bg-bone shadow-[0_30px_60px_-20px_rgba(43,69,51,0.25)]">
              <div className="grid min-w-[720px] grid-cols-4 divide-x divide-ink/10">
                {categories.map((cat) => (
                  <div key={cat} className="flex flex-col p-6">
                    <span className="num-chip mb-3 text-[10px] uppercase tracking-[0.3em] text-ink/40">
                      {String(categories.indexOf(cat) + 1).padStart(2, '0')}
                    </span>
                    <h4 className="mb-4 font-display text-xl italic text-ink">
                      {t(`groups.${cat}`)}
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {byCategory[cat].map((item) => (
                        <li key={item.key}>
                          <a
                            href={`#treatment-${item.key}`}
                            onClick={handleItemClick}
                            className="group/item flex items-baseline gap-2 text-[0.82rem] leading-snug text-ink/75 transition-colors hover:text-ink"
                          >
                            <span className="num-chip text-[9px] text-ink/35 group-hover/item:text-ink">
                              {item.index}
                            </span>
                            <span className="transition-transform duration-300 group-hover/item:translate-x-0.5">
                              {t(`items.${item.key}.name`)}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
