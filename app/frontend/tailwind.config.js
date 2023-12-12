/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#62A87C",
        "secondary": "#C3F3C0",
        "accent1": "#70DBFF",
        "accent2": "#F1EDEE",
        "base": "#1F2421"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

