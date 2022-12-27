/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
'light-blue': '#02298A',
'dark-blue': '#0574E3',
'blue': '#0575E6',
'gray':'#F2F2F2'
      }
    },
  },
  plugins: [],
}
