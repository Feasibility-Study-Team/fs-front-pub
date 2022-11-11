/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#032539",
        placeholder: "#F5F5F5",
        darkBlue: "#032539",
        iris100: "#5D5FEF",
      }
    },
  },
  plugins: [],
}