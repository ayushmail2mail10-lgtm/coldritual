/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlack: '#080808',
        softBlack: '#111111',
        offWhite: '#F5F3EE',
        lightGray: '#B8B8B8',
        darkGray: '#222222',
        icyBlue: '#A8D8FF',
        ritual: {
          950: '#080808',
          900: '#111111',
          850: '#161616',
          800: '#1f1f1f',
          700: '#222222',
          600: '#333333',
          500: '#555555',
          400: '#888888',
          300: '#B8B8B8',
          200: '#D6D4CE',
          100: '#F5F3EE',
          accent: '#A8D8FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      letterSpacing: {
        ultra: '0.25em',
        widest: '0.15em',
        tighter: '-0.04em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
