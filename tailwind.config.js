/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        "container":"1440px"
      },
      fontFamily:{
        "montserrat":"Montserrat, sans-serif"
      },
      colors:{
        "amii" : "linear-gradient(180deg, #FCA311 0%, #14213D 100%)"
      }
    },
  },
  plugins: [],
}