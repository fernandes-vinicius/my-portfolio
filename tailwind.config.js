const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        base: '11px 10px 38px rgba(79, 70, 229, 0.12)',
      },

      fontFamily: {
        sans: ['var(--font-josefin-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
