/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          light: '#4B6F44',
          DEFAULT: '#1E3F27',
          dark: '#122617',
        },
        pine: {
          light: '#538D64',
          DEFAULT: '#2C5E3B',
          dark: '#1C3D26',
        },
        terracotta: {
          light: '#C7754B',
          DEFAULT: '#A64F25',
          dark: '#7A3515',
        },
        clay: {
          light: '#F97316',
          DEFAULT: '#C2410C',
          dark: '#9A3412',
        },
        sand: {
          light: '#FCFBF7',
          DEFAULT: '#F5EFE6',
          dark: '#EAE0D0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

