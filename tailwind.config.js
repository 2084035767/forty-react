/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'p-blue': 'rgba(54, 98, 236, 0.8)',
        's-blue': 'rgba(54, 98, 236, 0.6)',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
