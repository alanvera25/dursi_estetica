'use client';

import clsx from 'clsx';
import { Isotype } from './Isotype';

interface LogoProps {
  className?: string;
  variant?: 'stacked' | 'inline';
  animate?: boolean;
}

export function Logo({ className, variant = 'stacked', animate = false }: LogoProps) {
  if (variant === 'inline') {
    return (
      <div className={clsx('inline-flex items-center gap-3', className)}>
        <Isotype className="h-8 w-auto" strokeWidth={8} animate={animate} />
        <div className="flex flex-col leading-none">
          <span className="font-sans text-xl font-bold tracking-[0.04em]">DURSI</span>
          <span className="mt-[0.35em] text-[0.58rem] uppercase tracking-[0.4em] opacity-70">
            estética
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx('flex flex-col items-start', className)}>
      <Isotype className="h-[clamp(5rem,10vw,8rem)] w-auto" strokeWidth={6} animate={animate} />
      <div className="mt-[clamp(0.75rem,1.5vw,1.25rem)]">
        <div className="font-sans text-[clamp(2rem,4.5vw,4rem)] font-bold leading-none tracking-[0.04em]">
          DURSI
        </div>
        <div className="mt-[0.7em] text-[clamp(0.58rem,0.9vw,0.78rem)] uppercase tracking-[0.55em] opacity-70">
          estética
        </div>
      </div>
    </div>
  );
}
