const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleared: true
};

console.log(glass);

const key = Object.keys(glass);
const value = Object.values(glass);
console.log(key);
console.log(value);
console.log(`${key} : ${value}`);

const pair = Object.entries(glass);
console.log(pair);

delete glass.isCleared;
console.log(glass);

const {isCleared, ...glassNew} = glass;
console.log(glassNew);

Object.freeze(glassNew);

glassNew.source = 'Bangladesh';
console.log(glassNew);

Object.seal(glassNew);
delete glass.name;
glassNew.price = 5000;
console.log(glassNew);