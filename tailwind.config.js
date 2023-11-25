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
      'prepaf-orange': '#F79F4F',
      'prepaf-yellow': '#FFDE33',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      'black-800': '#1E1E1E',
      'black-1000': '#000000',
      'gray-50': '#F8F8F8',
      'gray-100': '#F0F0F0',
      'gray-200': '#EBEBEB',
      'gray-300': '#D6D6D6',
      'gray-500': '#B9B9B9',
      'gray-600': '#848484',
      'blue-400': '#09BFD8',
      'blue-500': '#22B4D8',
      'yellow-200': '#F7EBAD',
      'yellow-800': '#E0BB00',
      'orange-200': '#FEB470',
      'orange-400': '#EE923D',
      'green-200': '#A5DF28',
      'green-300': '#A5DF28',
      'green-400': '#9ED130',
      'red-600': '#E93D32',
      'red-800': '#CE2D23',
      primary: '#F79F4F',
      secondary: '#FFDE33',
      treino: '#E0BB00',
      jogo: '#A5DF28',
      avaliacao: '#EE923D',
      recuperacao: '#09BFD8'
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}

