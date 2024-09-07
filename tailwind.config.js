/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#072F59",
        "light-blue": "#093e76",
        "alt-light-blue": "#eef6fe",
        green: "#5E9426",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "13rem", opacity: "1" },
        },
        slideUp: {
          "0%": { maxHeight: "13rem", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      animation: {
        rotate: "rotate 10s linear infinite",
        slideDown: "slideDown 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
