'use strict';

let input;
const numbers = [];
let total = 0;

do{

  input = prompt('Enter number:');
  let inputTemp = parseFloat(input);

  if(isNaN(inputTemp) && (input !== null)){
    alert('error, pls enter again.');
  }else if(input !== null) {
    total += inputTemp;
  }

}while(input !== null)

console.log(total);


