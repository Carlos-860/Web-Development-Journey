// console.log('linked');

// var test1 = 1;
// console.log(test1);
// var test1;
// console.log(test1);

// let test2;
// console.log(test2);

// FARENHEIT TO DEGREES
function toDegrees(farenheitNum) {
  farenheitNum = (farenheitNum - 32) * (5 / 9);

  return farenheitNum;
}
console.log(toDegrees(104));

function toFarenheit(degreeNum) {
  degreeNum = degreeNum / (5 / 9) + 32;

  return degreeNum;
}
console.log(toFarenheit(40));

let stringVariable = 'JavaScript Basics';

(() => {
  console.log(stringVariable.substring(-1, 9));
})();

let array1 = 'sean'.split('');
let array2 = array1.reverse();
debugger;
