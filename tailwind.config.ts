import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f0',
          100: '#dcecdc',
          200: '#b9d9b9',
          300: '#8fbf8f',
          400: '#65a565',
          500: '#3d7a3d',
          600: '#2d5e2d',
          700: '#1f421f',
          800: '#1a361a',
          900: '#0f210f',
          950: '#071207',
        },
        earth: {
          50: '#f8f4ee',
          100: '#efe5d6',
          200: '#dfc9ac',
          300: '#cba77a',
          400: '#b8894f',
          500: '#a0713c',
          600: '#8a5c33',
          700: '#6f462b',
          800: '#5c3a28',
          900: '#4d3124',
          950: '#2a1a12',
        },
        slate: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e2e6ea',
          300: '#c8cfd6',
          400: '#a3aeb9',
          500: '#7e8a96',
          600: '#64707d',
          700: '#525b66',
          800: '#3d444d',
          900: '#2c3238',
          950: '#1a1e23',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
