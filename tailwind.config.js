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
      backgroundImage:{
        "recentone" : "url('./img/recentone.png')",
        "recenttwo" : "url('./img/recenttwo.png')",
        "tiktokbanner" : "url('./img/tiktokbanner.png')",
        "recentthree" : "url('./img/recentthree.png')",
      }
    },
  },
  plugins: [],
}