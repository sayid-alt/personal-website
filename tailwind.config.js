/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#070B14',
          'bg-secondary': '#0D1526',
          card: 'rgba(255,255,255,0.03)',
          border: 'rgba(255,255,255,0.06)',
          text: '#E2E8F0',
          muted: '#94A3B8',
          faint: '#475569',
          cyan: '#22D3EE',
          'cyan-dim': 'rgba(34,211,238,0.15)',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blob: 'blob-morph 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'fade-in': 'fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'blob-morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
