/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001f"
      },
      fontFamily: {
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        "black": "4px 4px 0 #000",
        "white": "4px 4px 0 #fff"
      }
    },
  },
  darkMode: "selector",
  plugins: [],
}

