'use client';

import clsx from 'clsx';

interface LogoMarkProps {
  className?: string;
  showTagline?: boolean;
}

/**
 * Horizontal wordmark: isotype + "DURSI" + optional "estética" tagline.
 * Built in Montserrat Alternates (via font-sans) to stay faithful to brand book.
 */
export function LogoMark({ className, showTagline = true }: LogoMarkProps) {
  return (
    <div
      className={clsx('inline-flex items-center gap-2', className)}
      aria-label="D’Ursi Estética"
    >
      <svg
        viewBox="0 0 160 180"
        className="h-full w-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M 52 14 L 52 166 C 52 166, 148 150, 148 90 C 148 30, 52 14, 52 14 Z" />
        <path d="M 74 36 C 108 30, 128 60, 104 82 L 80 82" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-sans font-bold tracking-[0.04em] text-[1em]">
          DURSI
        </span>
        {showTagline && (
          <span className="mt-[0.35em] text-[0.32em] uppercase tracking-[0.4em] opacity-70">
            estética
          </span>
        )}
      </div>
    </div>
  );
}
