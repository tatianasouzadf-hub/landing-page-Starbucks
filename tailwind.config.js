/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/img/bg.png')"
      }
    },
  },
  plugins: [],
}