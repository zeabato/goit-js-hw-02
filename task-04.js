'use strict';

const formatString = function (string) {
  if (string.length >= 40){
    return string.slice(0, 40) + '...';
  } else{
    return string;
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// повернеться форматований рядок


// _____________v1________________
// let stringTemp = '';
//   for (let index = 0; index < string.length && index < 40; index++) {
//     stringTemp += string[index];
//   }
//   if (string.length >= 40){
//     return stringTemp + '...';
//   } else{
//     return stringTemp;
//   }
  