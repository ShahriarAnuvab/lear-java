const numbers = [4, 5, 2, 8, 10];
// const result = numbers.forEach(n => console.log(n));
// console.log(result);

const max = numbers.filter(n => n > 4);
console.log(max);
const max1 = numbers.find(n => n > 4);
console.log(max1);

const total = numbers.reduce((acum, current) => acum + current , 0 ) 
console.log(total)