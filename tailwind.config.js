/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "80px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: "#152C5B",
      secondary: "#3252DF",
      third: "#E5E5E5",
      price: "#FF498B",
      gray: "#b0b0b0",
      white: "#ffffff",
      black: "#000000",
      star: "#FFDA7A",
      minus: "#E74C3C",
      plus: "#1ABC9C",
      input: "#F5F6F8"
    },
    extend: {
      dropShadow: {
        "3xl": [
          "0px 0px 0px rgba(0, 0, 0, 0.25)",
          "0px 5px 5px rgba(50, 82, 223, 0.25)",
        ],
      },
    },
  },
  plugins: [],
};
