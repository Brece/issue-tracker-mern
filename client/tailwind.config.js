/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#dc254f',
        'secondary': '#0f2d4a',
        'white': '#ffffff'
      },
      ...colors
    },
  },
  plugins: [],
}
