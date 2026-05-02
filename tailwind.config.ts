import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './messages/**/*.json'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#2B4533',
        sage: '#CBD3C5',
        bone: '#EDE8E1',
        taupe: '#A08D84',
        'ink-80': 'rgba(43, 69, 51, 0.8)',
        'ink-60': 'rgba(43, 69, 51, 0.6)',
        'ink-40': 'rgba(43, 69, 51, 0.4)',
        'ink-20': 'rgba(43, 69, 51, 0.2)',
        'ink-10': 'rgba(43, 69, 51, 0.1)',
        'bone-80': 'rgba(237, 232, 225, 0.8)',
        'bone-60': 'rgba(237, 232, 225, 0.6)'
      },
      fontFamily: {
        sans: ['var(--font-montserrat-alt)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif']
      },
      letterSpacing: {
        'widest-2': '0.2em',
        'widest-3': '0.3em'
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.05' }],
        'eyebrow': ['0.72rem', { lineHeight: '1.2', letterSpacing: '0.3em' }]
      },
      animation: {
        'draw': 'draw 2.2s cubic-bezier(0.65, 0, 0.35, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite'
      },
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
};

export default config;
