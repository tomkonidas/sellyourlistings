module.exports = {
  purge: {
    enabled: true,
    content: ["./components/**/*.js", "./pages/**/*.js"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
