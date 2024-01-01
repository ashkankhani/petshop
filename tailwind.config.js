/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        suggestion : 'rgb(247, 188, 176);',
        aliceblue : 'aliceblue'
      },
      fontFamily : {
        vazir : ['vazir' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

