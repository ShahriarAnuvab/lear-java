function add(x = 5, y = 5) {
  return x + y;
}
console.log(add());


const add = (x,y=3) => x + y;
console.log(add(5,3));


const addSum = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
console.log(addSum(1,1,1,1));

const student = {name: 'Anuvab', age: 23};

const getName = (func) => func.name; 
const age = (func) => func.age;

console.log(getName(student));
console.log(age(student));

const arr = [1, 2, 3, 4, 5];

const getNumber = (arr) => arr[3];
console.log(getNumber(arr));

const pi = () => Math.PI.toFixed(4);
console.log(pi());

const FullName = (x) => `${x} Rahman`;

console.log(FullName('Anuvab'));