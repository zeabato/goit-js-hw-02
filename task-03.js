'use strict';

const findLongestWord = function (string) {
  const array = string.split(' ');    //створюєм масив із рядка 
  array.sort(function(a, b) {         //відсортовуєм масив по зростанню довжини елемента
      return b.length - a.length;
    });
    return array[0];     //повертаєм перший елемент масиву, він самий довгий!
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'


// __________V1_____________
// let conteinerMax = '';
// let conteinerTemp = '';

// for (let index = 0; index < string.length; index++) {

//   if (string[index] !== ' ') {
//     conteinerTemp += string[index];
//   } else if (conteinerTemp.length > conteinerMax.length) {
//     conteinerMax = conteinerTemp;
//     conteinerTemp ='';
//   } else{
//     conteinerTemp ='';
//   }
  
// }
// return conteinerMax;