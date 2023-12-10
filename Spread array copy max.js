// console.log(Math.max(1, 100, 200, 300, 500));
// const arr = [1, 100, 200, 300, 500];
// const arrMax = Math.max(...arr);
// console.log( arrMax);

const num = [1, 11, 22, 33, 44, 55];

const num2 = num;

// console.log(num);
// console.log(num2);

const numCopy = [...num, 65];
num.push(65);
num2.pop();
num2.pop();
num.push(20);
numCopy.push(75);
numCopy.push(85)

console.log(num);
console.log(num2);


console.log(numCopy);
