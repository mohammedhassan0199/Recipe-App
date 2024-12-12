/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': {min: '300px' , max: '639px' },               // Up to 640px
      'md': {min: '640px', max: '1024px' }, // From 640px to 1024px
      'lg': { min: '1024px', max: '1279px'},              // From 1024px and above
      'xl': { min: '1280px' , max: '1535px'},  
      '2xl': '1536px',
    },
    
    extend: {},
  },
  plugins: [],
}