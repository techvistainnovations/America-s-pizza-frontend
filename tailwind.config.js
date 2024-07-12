/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      themeColor : '#F47820',
      whiteColor : '#ffffff',
    },
    fontFamily : {
      openSans: ["Open Sans", 'sans-serif'],
      montserrat: ["Montserrat", 'sans-serif'],
      poppins : ["Poppins", 'sans-serif']
    }
  },
  plugins: [],
}

