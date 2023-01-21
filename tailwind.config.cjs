/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        red0: "hsl(12, 88%, 59%)",
        red1: "hsl(12, 88%, 69%)",
        red2: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkBluePale: "hsl(227, 12%, 61%)",
        darkBlue1: "hsl(233, 12%, 13%)",
        redPale: "hsl(13, 100%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
