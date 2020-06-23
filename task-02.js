'use strict';

const calculateEngravingPrice = function (message, pricePerWord) {
  let counter = 1;
  for (let index = 0; index < message.length; index++) {

    if (message[index] === ' ') {
      counter++;
    }
  }
  return counter*pricePerWord;
}


console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10)); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20, //зачем тут 
  ), // и тут запятая?
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120



