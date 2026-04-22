interface GrainTextureProps {
  className?: string;
  opacity?: number;
}

export function GrainTexture({ className, opacity = 0.06 }: GrainTextureProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className ?? ''}`}
      style={{
        opacity,
        mixBlendMode: 'multiply',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.92' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.85 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      }}
      aria-hidden
    />
  );
}
