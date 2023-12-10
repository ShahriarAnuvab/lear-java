// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
const numbers = [4, 5, 2, 8, 10];

function doubleIt(num) {
  return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);

const resultBonus = numbers.map(n => n+2);
console.log(resultBonus);
const resultHalf = numbers.map(n => n/2);
console.log(resultHalf);

