/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
 
  darkMode:'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm:"490px",
      md:"668px",
      lg: "900px",
      xl: "1200px"
      }, 
      fontFamily: {
        primary: 'Hind Siliguri',
      },
container: {
  padding: {
    DEFAULT: '1rem' ,
    lg:'2rem',
  }
},
extend: {
  colors: {
    dark: '#292830',
    light: '#BDBDBD',
    accent: '#FF7235',
    accentHover: '#e05216',
    grey: '#F5F5F5',
  },
  backgroundImage: {
    overview: "url('/src/assets/img/overview/bg.svg')",
    cta: "url('/src/assets/img/cta/bg.svg')",
  },

boxShadow :{
1: '0px 4px 30px rgba(0,0,0,0.08)'
},


}}
  
}