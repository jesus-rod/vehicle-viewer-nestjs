const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          light: "#B0B6B8", 
          lighter: "# D5D9D8",
          normal: "#6D7579",
          dark: "#394249;",
          darker: "#434C53;",
        },
        red: {
          default: "#CC0033",
          darker: "#AA142D",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
