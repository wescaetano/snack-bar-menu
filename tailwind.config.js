/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-750': '#2d3748',
        'gray-850': '#1a202c',
      },
    },
  },
  plugins: [],
};