/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 32,
    },
    colors: {
      //Visual Identity Colors
      'prepaf-orange':'#F79F4F',
      'prepaf-yellow':'#FFDE33',
      //white
      'white': '#ffffff',
      black:{
        800:'#1E1E1E',
        1000:'#000000',
      },
      gray:{
      50 :'#F8F8F8',
      100:'#F0F0F0',
      200:'#EBEBEB',
      300:'#D6D6D6',
      500:'#B9B9B9',
      600:'#848484',
      },
      blue:{
        500:'#22B4D8',
      },
      yellow:{
        200:'#FEBAD',
      },
      orange:{
        200:'#FEB470',
      },
      green:{
        300:'#A5DF28',
        400:'#9ED130',
      },
      red:{
        600:'#E93D32',
        800:'#CE2D23',
      },
      //Status Category Colors
      'treino':'#E0BB00',
      'jogo':'#B5EB1C',
      'recuperacao':'#09BFD8',
      'avaliacao':'#EE923D',
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}

