'use client';

import clsx from 'clsx';
import Image from 'next/image';

interface IsotypeProps {
  className?: string;
  imageClassName?: string;
  animate?: boolean;
  strokeWidth?: number;
  title?: string;
}

export function Isotype({ className, imageClassName, title = 'D\'Ursi Estética' }: IsotypeProps) {
  return (
    <div
      className={clsx('relative aspect-square', className)}
      role="img"
      aria-label={title}
    >
      <Image
        src="/logo-isotype.png"
        alt={title}
        fill
        className={clsx('object-contain', imageClassName)}
        priority
      />
    </div>
  );
}
