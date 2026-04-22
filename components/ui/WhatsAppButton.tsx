'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import { site } from '@/lib/site';

interface WhatsAppButtonProps {
  message?: string;
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
}

export function WhatsAppButton({
  message,
  children,
  className,
  variant = 'solid'
}: WhatsAppButtonProps) {
  const href = site.whatsapp(message);

  const base =
    'group relative inline-flex items-center gap-3 overflow-hidden px-7 py-4 text-[0.78rem] uppercase tracking-[0.24em] transition-all duration-500';

  const styles = {
    solid: 'bg-ink text-bone hover:bg-ink/90',
    outline: 'border border-ink text-ink hover:bg-ink hover:text-bone',
    ghost: 'text-ink hover:text-taupe'
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(base, styles[variant], className)}
      aria-label={typeof children === 'string' ? children : 'WhatsApp'}
    >
      <span className="relative z-10 flex items-center gap-3 font-medium">
        {children}
        <svg
          width="20"
          height="10"
          viewBox="0 0 20 10"
          className="transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden
        >
          <path
            d="M0 5h18M14 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
