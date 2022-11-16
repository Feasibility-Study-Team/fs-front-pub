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
        card: "#EDEEF2",
        cardtext: "#0A083A",
        darkBlue: "#032539",
        sidebar: "#363740",
        sbactive: "#41424C",
        sbactivetext: "#DDE2FF",
        adminholder: "#F7F8FC",
        admintext: "#252733",
        detailtext: "#717171",
        tablehead: "#9FA2B4",
        tablehover: "#DFE0EB",
        sbtext: "#A4A6B3",
        iris100: "#5D5FEF",
      }
    },
  },
  plugins: [],
}