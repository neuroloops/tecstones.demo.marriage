/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */



export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
      },
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

