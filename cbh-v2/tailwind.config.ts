import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Azerbaijani flag-inspired colors
        primary: {
          50: '#e6f5f1',
          100: '#b3e2d8',
          200: '#80cfbf',
          300: '#4dbca6',
          400: '#1aa88d',
          500: '#00966F', // Main green
          600: '#007a5a',
          700: '#005e45',
          800: '#004230',
          900: '#00261b',
          DEFAULT: '#00966F',
        },
        secondary: {
          50: '#e6f8fd',
          100: '#b3ecfa',
          200: '#80dff7',
          300: '#4dd3f4',
          400: '#1ac6f1',
          500: '#00B5E2', // Main blue
          600: '#0095b8',
          700: '#00748e',
          800: '#005364',
          900: '#00323a',
          DEFAULT: '#00B5E2',
        },
        accent: {
          50: '#fce6e7',
          100: '#f7b3b8',
          200: '#f28088',
          300: '#ed4d59',
          400: '#e81a29',
          500: '#E30A17', // Red (use sparingly)
          600: '#b60813',
          700: '#89060f',
          800: '#5c040a',
          900: '#2f0205',
          DEFAULT: '#E30A17',
        },
        // Neutral colors for text and backgrounds
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
          950: '#0a0a0a',
        },
        // Semantic colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Background colors
        background: {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
          tertiary: '#f1f5f9',
        },
        foreground: {
          DEFAULT: '#0f172a',
          secondary: '#475569',
          tertiary: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3rem', { lineHeight: '3.5rem' }],
        '6xl': ['3.75rem', { lineHeight: '4.25rem' }],
        '7xl': ['4.5rem', { lineHeight: '5rem' }],
        '8xl': ['6rem', { lineHeight: '6.5rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-in',
        'scale-up': 'scaleUp 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOut: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config;