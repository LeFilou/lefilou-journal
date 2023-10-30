/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
      'serif': ['Roboto', ...defaultTheme.fontFamily.serif],
      'mono': ['Roboto Condensed', ...defaultTheme.fontFamily.mono],
      'abril': ['Abril Fatface']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
