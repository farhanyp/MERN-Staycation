/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "80px",
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
