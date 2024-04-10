/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          "PrimaryColor" : "#6B3CC9",
          "SecondaryColor" : "#F28D35",
          "TextColorSubtle" : "#4D4D4D",
          "HeadingColor" :"#6A44F2"

        
      },
      fontFamily:{
         "inter": ['Inter'],
         "popins": ['Poppins'],
      }

    },
  },
  plugins: [],
}
