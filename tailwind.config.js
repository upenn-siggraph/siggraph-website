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
    fontSize: {
      xsm: '.65rem',
      sm: '.98rem',
      base: '1.3rem',
      xl: '1.95rem',
      '2xl': '2.6rem',
      '3xl': '3.25rem',
      '4xl': '3.9rem',
      '5xl': '4.55rem',
      '6xl': '5.2rem',
    },
    backgroundSize: {
      triangles: '180px',
    },
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1120px',
      // => @media (min-width: 1280px) { ... }
    },
    spacing: {
      0: '0',
      1: '12px',
      2: '18px',
      3: '24px',
      4: '32px',
      5: '42px',
      6: '56px',
    },

    extend: {
      backgroundImage: {
        'splash-triangles': 'url(\'resources/graphics/splash-triangles.svg\')',
      },
      colors: {
        gray: {
          base: '#363636',
          light: '#484848',
          'text-title': '#efefef',
          'text-subtitle': '#747474',
          'text-primary': '#a0a0a0',
          'text-secondary': '#676767',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
