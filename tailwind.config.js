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
      'home-banner-bg' : "url('/images/ui/desktop-burger-farm-banner.jpg')",
      'fries-icon' : "url('/images/ui/fries-icon.png')",
      'orange-fries-icon' : "url('/images/ui/bite-into-savings.jpg')",
      'bulk-order-banner':"url('/images/ui/image-265741-1720244133.jpeg')"
    },
    colors : {
      themeColor : '#03346E',
      bodyColor : '#F1F0F5',
      secondaryColor : '#dc84cf',
      whiteColor : '#ffffff',
      vegColor : '#97BE5A',
      nonVegColor : '#C80036',
      black : '#000000',
      red : '#ff0000',
      blackLabel : '#201C1D',
      darkbg: '#323231',
      descColor : '#848484',
      lightBorder : '#00000020'
    },
    fontFamily : {
      openSans: ["Open Sans", 'sans-serif'],
      montserrat: ["Montserrat", 'sans-serif'],
      poppins : ["Poppins", 'sans-serif']
    }
  },
  plugins: [],
}

