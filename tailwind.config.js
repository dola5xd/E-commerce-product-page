/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      Kumbh: ["Kumbh Sans", "sans-serif"],
    },
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '620px',
      // => @media (min-width: 620px) { ... }

      'lg': '1250px',
      // => @media (min-width: 1250px) { ... }
    },
    extend: {
      colors: {
        orange: ["hsl(26, 100%, 55%)"],
        paleOrange: ["hsl(25, 100%, 94%)"],
        Very_dark_blue: ["hsl(220, 13%, 13%)"],
        Dark_grayish_blue: ["hsl(219, 9%, 45%)"],
        Grayish_blue: ["hsl(220, 14%, 75%)"],
        Light_grayish_blue: ["hsl(223, 64%, 98%)"],
        // 16px
      }, 
      
    },
  },
  plugins: [],
};
