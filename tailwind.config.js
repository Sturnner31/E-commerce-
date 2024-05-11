/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#B3E5B5",
        secondary: " #FF0000",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem"
        },
      },
    },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer'),],
}

