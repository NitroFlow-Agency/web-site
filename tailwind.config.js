/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html, js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
    themes: [
      {
        nitroflow_light: {
          "primary": "#473BF0",
          "secondary": "#C7F459",
          "accent": "#F0F0F0",
          "neutral": "#000500",
          "base-100": "#FFFFFF",
          "info": "#90D7E9",
          "success": "#189A73",
          "warning": "#D8AF0E",
          "error": "#F25A71",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
