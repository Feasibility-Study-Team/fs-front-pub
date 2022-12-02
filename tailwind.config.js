/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueinventor: "#6F8DFF",
        bluebar: "#1C768F",
        primary: "#032539",
        greyuser: "#6C6B6B",
        greenuser: "#02BE83",
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
        textpending: "#C5221F",
        textreview: "#FA991C",
        textdone: "#02BE83"
      }
    },
  },
  plugins: [],
}