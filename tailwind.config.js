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



    extend: {
      colors: {
        "Off-white": "#fffdfa",
        "Grayish-blue": "#c5c6ce",
        "Dark-grayish-blue": "#5d5f79",
        "Very-dark-blue": "#00001a",

        "Soft-orange": "#e9ab53",
        "Soft-red": "#f15e50",
    },

    fontSize: {
      "body": "15px"
    },
  },
},
  plugins: [
    require('flowbite/plugin')
  ]
}
