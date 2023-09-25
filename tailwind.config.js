/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
        anton: ['Anton', 'sans'], // 'Anton' should match the font name you used in the link above
         montserrat: ['Montserrat', 'sans'], // 'Montserrat' should match the font name you used in the link above
      },
       colors: {
      secondary:'#13161B',
      primary:'#405759',
      accent:'#697A91',
    },
    },
  },
  plugins: [require('flowbite/plugin')],
}