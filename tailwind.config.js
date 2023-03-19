/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx,html,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
