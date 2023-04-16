/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        400 : '400px'
      },
      maxWidth :{
        1000 : '1000px'
      },
      width: {
        400 : '400px'
      }
    },
  },
  plugins: [],
}