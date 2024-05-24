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
    },
  },
};
