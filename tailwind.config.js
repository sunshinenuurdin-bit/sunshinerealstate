/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandGold: '#D4AF37',
        brandDark: '#0a0a0a',
        navy: { DEFAULT: '#0d1b2a', light: '#152234', deep: '#080f18' },
        gold: { DEFAULT: '#C9A84C', light: '#e8c96a', pale: '#f5e6b8', dark: '#9d7d2e' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
    },
  },
  plugins: [],
}
