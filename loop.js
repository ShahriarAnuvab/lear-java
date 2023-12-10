//for of will be used  String and Array 
const numbers = [1, 6, 8, 4];
for(let i = 0; i <numbers.length; i++){
    console.log(numbers[i]);
}
for(const num of numbers){
    console.log(num);
}
const nam = `anuvab`;

for(let i = 0; i <nam.length; i++){
    console.log(nam[i]);
};

for(const ch of nam){
    console.log(ch);
};


// for in used in obj 
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleared: true
};
for(const key in glass){
    value = glass[key]
    console.log(key)
    console.log(value)
}

const keys = Object.keys(glass);
console.log(keys);

for(key of keys){
    value = glass[key]
    console.log(key)
    console.log(value)
}