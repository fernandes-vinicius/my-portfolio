const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000000',
      white: '#FFFFFF',

      'gray-100': '#F3F4F6',
      'gray-200': '#E5E7EB',
      'gray-400': '#9CA3AF',
      'gray-500': '#6B7280',
      'gray-900': '#111827',

      'amber-500': '#F59E0B',
      'amber-600': '#D97706',

      'indigo-600': '#4F46E5',
      'indigo-900': '#312E81',

      'blue-50': '#EFF6FF',

      'red-500': '#EF4444',
    },

    boxShadow: {
      base: '11px 10px 38px rgba(79, 70, 229, 0.12)',
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-josefin-sans)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
