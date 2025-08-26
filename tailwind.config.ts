import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Azerbaijani Flag Inspired Color Palette
        primary: {
          50: '#e6f4ea',
          100: '#c1e3cb',
          200: '#98d1a9',
          300: '#6ebf87',
          400: '#4fb06d',
          500: '#00966F', // Azerbaijan Green
          600: '#008861',
          700: '#007654',
          800: '#006547',
          900: '#00453d',
        },
        secondary: {
          50: '#e8f4fb',
          100: '#c5e4f5',
          200: '#9ed2ef',
          300: '#77c0e9',
          400: '#5ab2e4',
          500: '#00B5E2', // Azerbaijan Blue
          600: '#0095c4',
          700: '#0075a0',
          800: '#00567d',
          900: '#003859',
        },
        accent: {
          50: '#ffebeb',
          100: '#ffcdcd',
          200: '#ffabab',
          300: '#ff8989',
          400: '#ff6f6f',
          500: '#E30A17', // Azerbaijan Red
          600: '#cc0915',
          700: '#b30813',
          800: '#990711',
          900: '#66050c',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ocean-gradient': 'linear-gradient(135deg, #006994 0%, #0084B4 100%)',
        'sand-gradient': 'linear-gradient(135deg, #F5E6D3 0%, #D4B5A0 100%)',
      },
      boxShadow: {
        soft: '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        medium: '0 4px 25px 0 rgba(0, 0, 0, 0.15)',
        hard: '0 10px 40px 0 rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;
