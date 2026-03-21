/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'miko-black': '#000000',
        'miko-pink': '#FF1493',
        'miko-gold': '#FFD700',
        'miko-white': '#FFFFFF',
        'miko-gray': '#1A1A1A',
        'miko-dark': '#0D0D0D',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
