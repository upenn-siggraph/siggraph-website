const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/{pages,lib,components,hooks}/**/*.{html,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: colors.transparent,
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
        4: 'B181B7',
      },
    },
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
