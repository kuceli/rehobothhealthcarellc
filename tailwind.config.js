/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#072F59",
        "light-blue": "#1A65BC",
        green: "#5E9426",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
