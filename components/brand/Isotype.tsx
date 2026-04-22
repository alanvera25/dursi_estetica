'use client';

import clsx from 'clsx';

interface IsotypeProps {
  className?: string;
  animate?: boolean;
  strokeWidth?: number;
  title?: string;
}

export function Isotype({
  className,
  animate = false,
  strokeWidth = 6,
  title = 'D’Ursi Estética'
}: IsotypeProps) {
  return (
    <svg
      viewBox="0 0 160 180"
      className={clsx(className)}
      role="img"
      aria-label={title}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{title}</title>
      {/* outer leaf/D shape: starts top, sweeps right, curves down and closes left into a hook */}
      <path
        className={animate ? 'draw-path' : ''}
        d="
          M 52 14
          L 52 166
          C 52 166, 148 150, 148 90
          C 148 30, 52 14, 52 14
          Z
        "
      />
      {/* inner small hook at top — evokes 'D' inner counter */}
      <path
        className={animate ? 'draw-path draw-slow' : ''}
        d="
          M 74 36
          C 108 30, 128 60, 104 82
          L 80 82
        "
      />
    </svg>
  );
}
