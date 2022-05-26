const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: { xs: "375px", ...defaultTheme.screens },
    extend: {},
  },
  variant: {},
  plugins: [],
};
