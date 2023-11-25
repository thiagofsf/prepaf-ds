import kebabcase from 'lodash.kebabcase';

export const tokens = {
    colors:{
      prepaforange:{token:'prepaf-orange', value:'#F79F4F'},
      prepafyellow:{token:'prepaf-yellow', value:'#FFDE33'},
      //Basic Colors
      white:{token:'white', value: '#ffffff'},
      black:{token:'black', value: '#000000'},
      transparent:{token:'transparent', value:'transparent'},
      //Black Variants
      black800:{token:'black-800', value:'#1E1E1E'},
      black1000:{token:'black-1000', value:'#000000'},
      //Gray Variants
      gray50:{token:'gray-50', value:'#F8F8F8'},
      gray100:{token:'gray-100', value:'#F0F0F0'},
      gray200:{token:'gray-200', value:'#EBEBEB'},
      gray300:{token:'gray-300', value:'#D6D6D6'},
      gray500:{token:'gray-500', value:'#B9B9B9'},
      gray600:{token:'gray-600', value:'#848484'},
      //Blue Variants
      blue400:{token:'blue-400', value:'#09BFD8'},
      blue500:{token:'blue-500', value:'#22B4D8'},
      //Yellow Variants
      yellow200:{token:'yellow-200', value:'#F7EBAD'},
      yellow800:{token:'yellow-800', value:'#E0BB00'},
      //Orange Variants
      orange200:{token:'orange-200', value:'#FEB470'},
      orange400:{token:'orange-400', value:'#EE923D'},
      //Green Variants
      green200:{token:'green-200', value:'#A5DF28'},
      green300:{token:'green-300', value:'#A5DF28'},
      green400:{token:'green-400', value:'#9ED130'},
      //Reds Variants
      red600:{token:'red-600', value:'#E93D32'},
      red800:{token:'red-800', value:'#CE2D23'},
    },
    family:{
      sans:{token:'sans', value:'Roboto, sans-serif'}
    },
    fontSize:{
      xs:{token:'xs', value: 12},
      sm:{token:'sm', value: 14},
      md:{token:'md', value: 16},
      lg:{token:'lg', value: 18},
      xl:{token:'xl', value: 20},
      '2xl':{token:'2xl', value: 24},
      '3xl':{token:'3xl', value: 32},

    }
}
export const secondTokens = {
  colors: {
    //primary and secondary
    primary:{token:'primary', value:tokens.colors.prepaforange.value},
    secondary:{token:'secondary', value:tokens.colors.prepafyellow.value},
    //Tokens de categoria
    treino:{token:'treino', value:tokens.colors.yellow800.value},
    jogo:{token:'jogo', value:tokens.colors.green200.value},
    avaliacao:{token:'avaliacao', value:tokens.colors.orange400.value},
    recuperacao:{token:'recuperacao', value:tokens.colors.blue400.value},

  }
}

export const colorsTokens = Object.fromEntries(Object.values(tokens.colors).map(({token, value})=>[kebabcase(token), value]).concat(Object.values(secondTokens.colors).map(({token, value})=>[kebabcase(token), value])));
console.log(colorsTokens);

