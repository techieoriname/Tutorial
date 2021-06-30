const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
    }
  },
  plugins: []
}
