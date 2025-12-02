/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#5eead4',
          500: '#2dd4bf',
          600: '#14b8a6',
        },
        secondary: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        accent: {
          teal: '#14b8a6',
          cyan: '#06b6d4',
          orange: '#f97316',
        },
      },
    },
  },
  plugins: [],
};
