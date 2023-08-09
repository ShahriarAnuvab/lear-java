var  fri_name = ["anuvab", "Emon", "Afsari"];
console.log(fri_name);

var ig = fri_name.indexOf("Emon");
console.log(ig);

fri_name.push("Fuck");
console.log(fri_name);
fri_name.pop();
console.log(fri_name);



var fruits = ["Apple", "Banana",  "Orange"];
console.log(fruits.indexOf("Banana"));
fruits[1] = "Mango";
console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);



var std = "Anuvab";
var marks = 39;

if(marks >= 80){
    console.log(std +" got :" + marks + " Marks, Grade A");
}
else if( marks >= 60){
    console.log(std +" got :" + marks + " Marks, Grade B");
}
else if(marks >=50){
    console.log(std +" got :" + marks + " Marks, Grade C");
}
else if(marks>=40 ){
    console.log(std +" got :" + marks + " Marks, Grade D");
}
else{
        console.log(std +", Grade F. Better Luck Next Time.");
}




function findLargerNumber(n1, n2, n3){


    if(n1>n2 && n1>n3){
        console.log(n1);
    }
    else if(n2>n3 && n2>n1){
        console.log(n2);
        larger = n2;
    }
    else if(n3>n2 && n3>n1){
        console.log(n3);

    }
    else{
        console.log("None");
    }
    
} 
var n1 = 13;
var n2 = 79;
var n3 = 45;
findLargerNumber(n1, n2, n3);



var n1 = 13;
var n2 = 13;
var n3 = 13;

if(n1>n2 && n1>n3){
    console.log(n1);
}
else if(n2>n3 && n2>n1){
    console.log(n2);
}
else if(n3>n2 && n3>n1){
    console.log(n3);
}
else{
    console.log("None");
}




function foo(){
    console.log("foo");
}
function boo(){
    console.log("boo");
}

foo()
boo()


function make_avg(n1, n2, n3){
   var sum = n1+n2+n3;
   var avg = sum/3;

   console.log(avg.toFixed(2));
    
} 
var n1 = 13;
var n2 = 79;
var n3 = 45;
make_avg(n1, n2, n3);


function Avg(array){
    var total = 0;
for(let i = 0; i < num.length; i++){
    total += num[i];
    var avg = total/num.length;
}
    return avg;
}
const num = [3,3,3];
console.log(Avg(num));

var student = {
    name: "Bara",
    age: 39,
    dhon : "Nai",
    nickName : "sisu-nunu",
    fav_food: "kochi meye"

}
console.log(student.age);
console.log(student);
student.age = 41;
console.log(student.age);
console.log(student);
student["age"] = 45;
console.log(student.age);
var properties = Object.keys(student);
console.log(Object.keys(student));
console.log(Object.values(student));
var key = Object.keys(student);
console.log(key);
for (let i = 0; i < key.length; i++){
    let porpertyName = key[i];
    let propertyValue = student[porpertyName];
    console.log(porpertyName +": "+ propertyValue);

}
for(let porpertyName in student){
    const value = student[porpertyName];
    console.log(porpertyName + ": "+ value);
}

function oddEven(num){
    if(num%2 == 0 ){
        console.log(num+ " is Even");
        return "Even";
    }
    else{
        console.log(num+ " is odd");
        return "Odd";
    }
}
var num = 3;
console.log(oddEven(num));

function signal(color){
    if(color == "red"){
        console.log("Danger");
    }
    else if(color=="yellow"){
        console.log("Stop")
    }
    else if(color == "green" ){
        console.log("Cross the road");
    }
    else{
        console.log("Invalid Color");
    }
}
let color = "green";
signal(color);

function  sumOfArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){  
        var elemet = array[i];
        sum = sum + elemet;
   
    }
         console.log(sum);
}
array =[ 12, 65, 45, 78, 32, 45, 91];
sumOfArray(array);

function findOddEven(array){
    let sum = 0;
    for( let i = 0; i < array.length; i++){
        var elemet = array[i];
        if(elemet %2 ==0){
            sum = sum + elemet;
        }
    }
    
        console.log(sum);
}

array = [5, 7, 8, 10, 45, 30];
findOddEven(array);

function findOddSum(array){
    var oddNumber = [];
    for( let i = 0; i < array.length; i++){
        var elemet = array[i];
        if(elemet %2 ==0){
            oddNumber.push(elemet);
        }
    }
    return oddNumber;
}

array = [5, 7, 8, 10, 45, 30];
var oddArray = findOddSum(array);
console.log(oddArray);
sumOfArray(oddArray);

function factorial(number){
    let result = 1;
    for(let i = 1; i <=number; i++){
        result = result *i;
    }
    return result;
}

const result = factorial(9);
console.log(result)


function factorialWhile(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * number;
        num++
    }
    return result;
}
console.log(factorialWhile(3));

function factorialWhileRev(number){
    let num = 8;
    let result = 1;
    while(num => 1){
        result = result * number;
        num--;    
    }
    return result;
}
console.log(factorialWhileRev(3));



function fibonacci(number){
    var fibSeries =[0, 1];
    for(let i=2; i <= number; i++){
       const fib =  fibSeries[i-1] + fibSeries[i-2];
       fibSeries.push(fib);
        
    }
    return fibSeries;

}
var fib = fibonacci(11);
console.log(fib);

function checkHeight(feet){
    const inch = feet /12;
    return inch;  
}

console.log(checkHeight(84));

function mileToKm(miles){
    const km = miles * 1.60934;
    return km;
}
console.log(mileToKm(2));

function evenAndOdd(number){
    if(number %2 ==0){
        return true;
    }else{
        return false;
    }
}
console.log(evenAndOdd(98));
console.log(evenAndOdd(117));

function hourTominutes(hour){
    const minit = hour * 60;
    console.log(hour+" hour = "+ minit + " minutes");
}

function findLeapYear(year){
    const leapYear = [];
    for(let i=0; i < year.length; i++){
        let yearPrint = year[i]
        if((yearPrint%4==0) && ((yearPrint%400==0) || (yearPrint%100!==0))){
            leapYear.push(yearPrint);
            console.log(yearPrint)
        }
    }
    return leapYear;
}
year =[2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(year));