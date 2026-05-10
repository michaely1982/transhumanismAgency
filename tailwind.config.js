/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        classic: {
          black: '#070B0B',
          white: '#EAF6F1',
          slate: '#8BA19B',
          'slate-light': '#A8BBB6',
          'slate-dark': '#15201F',
          gold: '#F2C66D',
          'gold-light': '#F6D995',
          navy: '#0D1414',
          panel: '#101919',
          line: '#223131',
          cyan: '#73F2D4',
          mint: '#B5FFD7',
          signal: '#9AFCE8',
        }
      },
      fontFamily: {
        serif: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Manrope"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-grid': 'pulseGrid 8s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGrid: {
          '0%, 100%': { opacity: '0.18' },
          '50%': { opacity: '0.32' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
