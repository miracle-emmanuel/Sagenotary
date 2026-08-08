/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F1EEE1',
          dim: '#E7E2D2',
        },
        ink: {
          DEFAULT: '#20241B',
          soft: '#333829',
        },
        sage: {
          50: '#EEF1E7',
          100: '#DCE3CD',
          300: '#A9B790',
          500: '#74845C',
          600: '#5C6B48',
          700: '#4A5739',
          900: '#2B3320',
        },
        blush: {
          300: '#E3BDB6',
          500: '#C98F86',
          600: '#B0716A',
        },
        gold: {
          400: '#C7A250',
          500: '#A9822E',
          700: '#7A5D1F',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        stamp: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        stamp: '0.18em',
      },
      boxShadow: {
        seal: '0 18px 40px -18px rgba(32, 36, 27, 0.45)',
        card: '0 24px 60px -30px rgba(32, 36, 27, 0.35)',
      },
      dropShadow: {
        seal: '0 18px 30px rgba(32, 36, 27, 0.35)',
      },
      keyframes: {
        'seal-press': {
          '0%': { transform: 'scale(1.55) rotate(-14deg)', opacity: '0' },
          '55%': { transform: 'scale(0.94) rotate(2deg)', opacity: '1' },
          '75%': { transform: 'scale(1.03) rotate(-1deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'ink-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.55' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'seal-press': 'seal-press 0.9s cubic-bezier(.2,.8,.3,1.15) both',
        'ink-ring': 'ink-ring 1.1s ease-out 0.55s both',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
