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

console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Upendra" => true

let someNumber = 33;
let stringSomeNumber = String(someNumber);
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber);