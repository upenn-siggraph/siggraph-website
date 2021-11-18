/* eslint-disable unicorn/prefer-module */
module.exports = {
  mode: 'jit',
  purge: [
    'src/**/*.ts',
    'src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Lexend Deca', 'sans-serif'],
      sans: ['Shippori Antique', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
