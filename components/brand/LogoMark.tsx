'use client';

import clsx from 'clsx';
import Image from 'next/image';

interface LogoMarkProps {
  className?: string;
  showTagline?: boolean;
}

export function LogoMark({ className, showTagline = true }: LogoMarkProps) {
  return (
    <div
      className={clsx('inline-flex items-center gap-2', className)}
      aria-label="D'Ursi Estética"
    >
      <div className="relative aspect-square h-full">
        <Image
          src="/logo-isotype.png"
          alt=""
          fill
          className="object-contain"
          priority
          aria-hidden
        />
      </div>
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
