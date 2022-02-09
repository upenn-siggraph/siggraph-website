const colors = require("tailwindcss/colors")

module.exports = {
  content: ['{pages,lib,components}/**/*.{html,ts,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: {
        100: '#171616',
        200: '#242222',
        300: '#302e2d',
        400: '#666362',
        500: '#8a8a8a',
        600: '#9ea2a3',
        700: '#b1b8ba',
        800: '#c9d1d4',
        900: '#e4e9eb',
      },
      'logo-gradient': {
        1: '#FBBD4A',
        2: '#FE7D67',
        3: '#FF5195',
        4: 'B181B7'
      }
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'media'
}
