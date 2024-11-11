/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "finding_sec_bold": "#01afe9",
        "finding_background":"#b0ccff",
        "finding_text": "#777d80",
        "finding_all_text": "#243462",
        
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        "locationImage1": '/WEBP/locationImage.webp',
      },
      listStyleImage:{
        "listImage": "",
      },
      listStyleType:{
        "triangle": "▶",
      },
      screens: {
        "wide": "1440px",
        "mobile": "1122px"
      }
    },
  },
  plugins: [],
};