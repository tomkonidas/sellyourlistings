const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F55555",
          default: "#F54F4F",
          dark: "#FF3434",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
