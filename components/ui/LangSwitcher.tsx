'use client';

import clsx from 'clsx';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (target: 'es' | 'en') => {
    if (target === locale) return;
    // Strip existing /en prefix if present, then add new one (or none for default es)
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'en') segments.shift();
    const base = segments.length ? '/' + segments.join('/') : '/';
    const next = target === 'en' ? `/en${base === '/' ? '' : base}` : base;
    router.push(next);
  };

  return (
    <div className="smallcaps flex items-center gap-1.5 text-ink/60">
      <button
        onClick={() => switchTo('es')}
        className={clsx('transition-colors', locale === 'es' ? 'text-ink' : 'hover:text-ink')}
        aria-label="Español"
      >
        ES
      </button>
      <span className="opacity-40">/</span>
      <button
        onClick={() => switchTo('en')}
        className={clsx('transition-colors', locale === 'en' ? 'text-ink' : 'hover:text-ink')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
