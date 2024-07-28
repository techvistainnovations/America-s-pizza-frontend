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
      'fries-icon' : "url('./src/assets/images/ui/fries-icon.png')",
      'orange-fries-icon' : "url('./src/assets/images/ui/bite-into-savings.jpg')",
      'bulk-order-banner':"url('./src/assets//images/ui/image-265741-1720244133.jpeg')"
    },
    colors : {
      themeColor : '#F47820',
      whiteColor : '#ffffff',
      vegColor : '#97BE5A',
      nonVegColor : '#C80036',
      black : '#000000',
      red : '#ff0000',
      blackLabel : '#201C1D',
      darkbg: '#323231',
      descColor : '#848484'
    },
    fontFamily : {
      openSans: ["Open Sans", 'sans-serif'],
      montserrat: ["Montserrat", 'sans-serif'],
      poppins : ["Poppins", 'sans-serif']
    }
  },
  plugins: [],
}

