// console.log("JS module 16 ");

// console.log("Pracritice Problem-1");
// var money = 1000;
// var spend = 700;
// var left = money - spend;
// console.log(left);

// console.log("Pracritice Problem-2");
// var math =75.25;
// var bio =65;
// var che =80;
// var phy =35.45;
// var bang =99.50;
// var total = math + bio + che + phy + bang;
// var averrage = total/5;
// parseFloat(averrage)
// console.log(averrage.toFixed(2));

// console.log("Pracritice Problem-3");
// var str1 = "Hello";
// var str2 = "World!";
// var str3 = str1 + " " + str2;
// console.log(str3);

// console.log("Pracritice Problem-4");
// var input = 119;
// var remainder = input % 5;
// console.log(remainder);

// function add(x = 5, y = 5) {
//   return x + y;
// }
// console.log(add());

// function fullname(first, last = "Rahman") {
//   return `Name: ${first} ${last}`;
// }
// console.log(fullname('Anuvab'));

// const a  = 5;
// const  b = 5;
// const maths = `The Sum of ${a} and ${b} is, ${a+b}`
// console.log(maths);

// console.log(
//   "John cena is a superstar \n" + "he played in wwe \n" + "you cant see him"
// );
// console.log(`John cena is a superstar
// he played in wwe
// you cant see him`);

// const multiply = (x, y, z) => x * y * z;
// console.log(multiply(3, 2, 5));

// console.log(
//   "I am a web developer. \n" + "I love to Code. \n" + "I love to Eat Biriny"
// );
// console.log(`I am a web developer.
// I love to Code.
// I love to Eat Biriny`);
// const len = `Anuvab`
// console.log(len.length);

// const friends = (array) =>{
//   let newF = []
//   for (nam of friend) {
//     if(nam.length % 2 == 0){
//       newF.push(nam)
//       console.log(newF);
//     }
//   }
//   return newF

// }
// const friend = ["Jeem", "Abu", "Emon", "Afsari"];
// console.log(friends(friend))

//  const arrayConcat = (x, y) => {
//    z = x.concat(y)
//    return Math.max(...z)
// };

// x = [1, 2, 3]
// y = [100 , 5, 30, ]
// console.log(arrayConcat(x,y));

// let data = {
//   Sophia: {
//       id: 33,
//       study: [
//           {
//               primary:
//                   [
//                       { school_name: "ABC primary school" },
//                       { location: "Peters burg" }
//                   ]
//           },
//           {
//               secondary:
//                   [
//                       { school_name: "ABC secondary school" },
//                       { location: "St Lorence" }
//                   ]
//           },
//       ]
//   }
// }
// console.log(data.Sophia.study[0].primary[1]);
// console.log(data.Sophia.study[1].secondary[1]);

// let students = {
//   2222: {
//       name: "Jack",
//       section: "C",
//       class: "IX",
//       address: {
//           "building no": 12,
//           "street": "St. Jonson",
//           "city": "Petersburg",
//           "country": "UK"
//       }
//   },
//   3333: {
//       name: "Herry",
//       section: "D",
//       class: "X",
//       address: {
//           "building no": 85,
//           "street": "DC road",
//           "city": "Kachukhet",
//           "country": "Bangladesh"
//       }
//   }
// }

// console.log(students[2222].address.city)
// console.log(students[3333].name)

// let data2 = {
//   data:
//       [
//           {
//               bookId: 1,
//               bookDetails: {
//                   name: "habluder adda",
//                   category: "XYZ",
//                   price: "20$",
//               },
//               bookCategory: "Basic",
//           },
//           {
//               bookId: 2,
//               bookDetails: {
//                   name: "gobluder adda",
//                   category: "ABC",
//                   price: "40$",
//               },
//               bookCategory: "Beginner",
//           }
//       ]
//     }
//     console.log(data2.data[0].bookDetails.name)
//     console.log(data2.data[1].bookCategory)

// const number = [1, 3, 5, 7, 9];
// const newNumber = []
// for(num of number){
//   let even = num+1
//   newNumber.push(even)
// };
// console.log(newNumber)

// const mapEven =  number.map((number) => number + 1);
// console.log(mapEven);
// const arr = [10, 33, 50, 79, 78, 90, 101, 30];

// const divByTen = arr.filter((number) => Math.floor(number%10 ==0));
// console.log(divByTen)
// const divByTenf = arr.find((number) => Math.floor(number%10 ==0));
// console.log(divByTenf)

// const people = [
//   { name: "a", age: 20 },
//   { name: "b", age: 15 },
//   { name: "c", age: 22 },
// ];
// const ageSum = people.reduce((acum, pre) => acum + pre.age, 0)
// console.log(ageSum)
