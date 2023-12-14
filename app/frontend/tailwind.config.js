/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '280px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
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

