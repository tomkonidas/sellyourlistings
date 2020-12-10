const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F55555",
          DEFAULT: "#F54F4F",
          dark: "#FF3434",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
