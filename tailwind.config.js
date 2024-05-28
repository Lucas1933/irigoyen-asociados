/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  plugins: [require("tw-elements/plugin.cjs")],
  theme: {
    extend: {
      colors: {
        "red-law": "#8d0f21",
        "black-law": "#1a1d22",
      },
      keyframes: {
        "slide-dropdown": {
          "0%": { opacity: 0, transform: "translateY(0)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-dropdown": "slide-dropdown 2s ease-in-out forwards",
      },
    },
  },
};
