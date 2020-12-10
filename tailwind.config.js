const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: [
      "./src/components/**/*.js",
      "./src/pages/**/*.js",
      "./src/templates/**/*.js",
    ],
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
