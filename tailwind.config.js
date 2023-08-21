/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx,html,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        siggraph: {
          1: 'rgb(252,201,93)',
          2: 'rgb(255,173,111)',
          3: 'rgb(251,113,176)',
          4: 'rgb(176,160,208)',
        },
      },
      animation: {
        blink: 'blink 1s steps(1, end) infinite',
      },
      keyframes: {
        blink: {
          from: { opacity: 1 },
          '50%': { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
