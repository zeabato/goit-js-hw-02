'use strict';

let input = 0;
const numbers = [];
let total = 0;



for (; ;) {                         // цикл наповнює масив
  input = prompt('Enter number:');
  numbers.push(input);
  if (input === null){
    break;
    }
  }

const sumArr = function(array){       //функція рахує суму чисел в масиві, не числа ігнорує
  let totalTemp = 0;
  for (let index = 0; index < array.length; index++) {

    if (isNaN(parseFloat(array[index])) === false){
      totalTemp += parseFloat(array[index]);
    }
  }
  return totalTemp;
}

total = sumArr(numbers);
alert('summ ' + total);


// ----------V1--------------------
// do{

//   input = prompt('Enter number:');
//   let inputTemp = parseFloat(input);

//   if(isNaN(inputTemp) && (input !== null)){
//     alert('error, pls enter again.');
//   }else if(input !== null) {
//     total += inputTemp;
//   }

// }while(input !== null)