/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      "Inter-Bold": "Inter-Bold",
      "Inter-ExtraBold": "Inter-ExtraBold",
      "Inter-Regular": "Inter-Regular",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
