/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '11px']
      }
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-debug-screens')],
}

