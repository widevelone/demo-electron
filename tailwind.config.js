const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
// import { colors } from "tailwindcss/colors"
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    // "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // you can either spread `colors` to apply all the colors
        ...colors,
        // or add them one by one and name whatever you want
        // amber: colors.amber,
        // emerald: colors.emerald,
        primary: colors.blue[500]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

