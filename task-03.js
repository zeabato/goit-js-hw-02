'use strict';

const findLongestWord = function (string) {
  
  let conteinerMax = '';
  let conteinerTemp = '';

  for (let index = 0; index < string.length; index++) {

    if (string[index] !== ' ') {
      conteinerTemp += string[index];
    } else if (conteinerTemp.length > conteinerMax.length) {
      conteinerMax = conteinerTemp;
      conteinerTemp ='';
    } else{
      conteinerTemp ='';
    }
    
  }
  return conteinerMax;
  

};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
