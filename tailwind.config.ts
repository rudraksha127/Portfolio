import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'neural': {
          900: '#030014',
          800: '#07041a',
          700: '#0a0621',
        },
      },
      animation: {
        'float':       'float-y 4.5s ease-in-out infinite',
        'shimmer':     'shimmer-move 5s ease infinite',
        'spin-slow':   'spin-slow 10s linear infinite',
        'border-glow': 'border-cycle 5s ease infinite',
        'scan':        'scan-line 4s ease-in-out infinite',
        'blink':       'cursor-blink 1.1s ease-in-out infinite',
        'status':      'status-pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        'shimmer-move': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'border-cycle': {
          '0%':   { borderColor: 'rgba(112,66,248,0.35)' },
          '33%':  { borderColor: 'rgba(14,165,233,0.4)'  },
          '66%':  { borderColor: 'rgba(16,185,129,0.35)' },
          '100%': { borderColor: 'rgba(112,66,248,0.35)' },
        },
        'scan-line': {
          from: { transform: 'translateY(-100%)' },
          to:   { transform: 'translateY(200%)' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'status-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(16,185,129,0.45)' },
          '60%':       { boxShadow: '0 0 0 5px rgba(16,185,129,0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

