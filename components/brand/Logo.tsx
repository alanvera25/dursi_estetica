'use client';

import clsx from 'clsx';
import { Isotype } from './Isotype';

interface LogoProps {
  className?: string;
  variant?: 'stacked' | 'inline' | 'hero';
  animate?: boolean;
  onDark?: boolean;
  large?: boolean;
}

export function Logo({ className, variant = 'stacked', animate = false, onDark = false, large = false }: LogoProps) {
  const imgCls = onDark ? 'brightness-0 invert' : undefined;

  if (variant === 'hero') {
    return (
      <div className={clsx('flex w-full items-center gap-4 lg:gap-8', className)}>
        <Isotype
          className="h-[clamp(6rem,19vw,10rem)] w-auto flex-shrink-0"
          imageClassName={imgCls}
          animate={animate}
        />
        <div className="flex min-w-0 flex-col leading-none">
          <span className="font-sans text-[clamp(3.5rem,16vw,7.5rem)] font-bold leading-none tracking-[-0.025em]">
            DURSI
          </span>
          <span className="mt-[0.3em] lowercase tracking-[0.45em] opacity-65 text-[clamp(0.8rem,2.8vw,1.05rem)]">
            estética
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={clsx('inline-flex items-center gap-3', className)}>
        <Isotype className="h-8 w-auto" imageClassName={imgCls} animate={animate} />
        <div className="flex flex-col leading-none">
          <span className="font-sans text-xl font-bold tracking-[-0.01em]">DURSI</span>
          <span className="mt-[0.35em] text-[0.58rem] lowercase tracking-[0.4em] opacity-70">
            estética
          </span>
        </div>
      </div>
    );
  }

  const isotypeSize = large
    ? 'h-[clamp(6rem,12vw,13rem)]'
    : 'h-[clamp(5rem,10vw,8rem)]';
  const dursiSize = large
    ? 'text-[clamp(3rem,8vw,8.5rem)]'
    : 'text-[clamp(2rem,4.5vw,4rem)]';
  const esteticaSize = large
    ? 'text-[clamp(0.75rem,1.1vw,1.05rem)]'
    : 'text-[clamp(0.58rem,0.9vw,0.78rem)]';

  return (
    <div className={clsx('flex flex-col items-start', className)}>
      <Isotype className={clsx('w-auto', isotypeSize)} imageClassName={imgCls} animate={animate} />
      <div className="mt-[clamp(0.5rem,1vw,1rem)]">
        <div className={clsx('font-sans font-bold leading-none tracking-[-0.01em]', dursiSize)}>
          DURSI
        </div>
        <div className={clsx('mt-[0.5em] lowercase tracking-[0.45em] opacity-65', esteticaSize)}>
          estética
        </div>
      </div>
    </div>
  );
}
