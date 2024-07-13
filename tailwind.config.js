/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'home-banner-bg' : "url('./src/assets/images/ui/desktop-burger-farm-banner.jpg')",
      'fries-icon' : "url('./src/assets/images/ui/fries-icon.png')"
    },
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

