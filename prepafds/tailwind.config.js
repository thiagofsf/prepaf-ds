/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      '2xs': 12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      //Visual Identity Colors
      'prepaf-orange':'#F79F4F',
      'prepaf-yellow':'#FFDE33',
      //Black
      'black-800':'#1E1E1E',
      'black-1000':'#000000',
      //Gray
      'gray-50':'#F8F8F8',
      'gray-100':'#F0F0F0',
      'gray-200':'#EBEBEB',
      'gray-300':'#D6D6D6',
      'gray-600':'#848484',
      //Blue
      'blue-500':'#22B4D8',
      //Yellow
      'yellow-200':'#FEBAD',
      //Orange
      'orange-200':'#FEB470',
      //Green
      'green-300':'#A5DF28',
      'green-400':'#9ED130',
      //red
      'red-600':'#E93D32',
      'red-800':'#CE2D23',
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

