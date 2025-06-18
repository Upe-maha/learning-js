"use strict"; //trits all code as newer version of JS

// alert(3 + 3); // we are using node.js, so no browser alert
// code must be readable weather you use semicolon or not
// code readability is important
// console.log(3 + 3)

// console.log("Upendra")

// Data types in JavaScript
let name = "Upendra" // string
let age = 30 // number
let isLoggedIn = true // boolean
let state; // undefined

// number => 2 to power 53
// bigint
// string => ""
// boolean => true or false
// null => stabdalone value
// undefined => variable is not defined
// symbol => unique value



// objects

// console.log(typeof "name") // string
// console.log(typeof age) // number

// let score = "Upendra";

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score); // converting string to number
// console.log(typeof (valueInNumber));
// console.log(valueInNumber); //NaN represents Not a Number in output

//Notes
// "33" => 33
// "33abc" => NaN
//true => 1
//false => 0
// null => 0
// undefined => NaN

let idLoggedIn = ""

let booleanIsLoggedIn = Boolean(idLoggedIn); // converting number to boolean

// console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Upendra" => true

let someNumber = 33;
let stringSomeNumber = String(someNumber);
// console.log(typeof stringSomeNumber);
// console.log(stringSomeNumber);


//******** Operation *****************


let value = 3
let negValue = -value;
// console.log(negValue);


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Hello";
let str2 = " Mahatara";

let str3 = str1 + str2;
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

console.log(+true);
console.log(+"");

let num1, num2, num3; //not recommended to declare multiple variables in one line
num1 = num2 = num3 = 2 + 2;

// Prefix and Postfix Increment/Decrement Operators
let gameCounter = 100;
// ++gameCounter;
console.log(gameCounter);
const gamePlayer = gameCounter++;
console.log(gamePlayer, gameCounter);

