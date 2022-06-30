/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2d5c9e",

          "secondary": "#00315b",

          "accent": "#3fd3b3",

          "neutral": "#332037",

          "base-100": "#F9F9FB",

          "info": "#9CB7E2",

          "success": "#126E5A",

          "warning": "#F49725",

          "error": "#EB5537",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

