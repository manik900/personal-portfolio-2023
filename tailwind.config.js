/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  purge: [
    "./src/**/*.{html,jsx,js,css}"
  ],
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
  primary: 'Orbitron',
  secondary: 'Rajdhani',
  tertiary: 'Aldrich',
  manik: 'Russo One'
},
container: {
  DEFAULT:'15px',
},
extend: {

colors: {
  primary: '#0a0a0a',
  accent: '#B809C3',
},
backgroundImage: {
   site: "url('./img/banner.jpg)",
 about: "url(./img/jjj.jpg)",

}

}}
  
}