/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "inter" : ['inter'],
        "circular" : ['Circular STD']
      },
      colors : {
        "primary" : '#191825',
        "second" : '#F85E9F',
        "ungu" : '#5D50C6'
      }
    },

  },
  plugins: [],
}

