/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
const Color = require('color')

// const darken = (clr, val) => Color(clr).darken(val).hex()

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ['8px', '11px']
      },
      colors: {

        'main': {
          500: 'hsl(9, 100%, 60%)',
          800: 'hsl(9, 100%, 45%)',
        }


      }

    },
  },
  plugins: [require("daisyui"), require('tailwindcss-debug-screens')],
}

