const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#FC0D1B",
        "primary-black": "#111111",
        "secondary-black": "#191919",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
