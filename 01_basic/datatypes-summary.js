// #############Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

//const score:number = 100 // this is done in typescript, in javascript it will be const score = 100;
const score = 100
// console.log(typeof score) number
const scoreValue = 100.3

const isLoggedIn = false //boolean
const outsideTemp = null // null is a standalone value, it is not an object, it is a primitive value
//returns "object" in typeof, but it is a primitive value
let userEmail; // undefined, variable

const id = Symbol('123')
const anotherId = Symbol('123') // even value are given same, but they return different values

// console.log(id === anotherId) // false, because symbols are unique
// console.log(typeof id) // returns "symbol"

const bigNumber = 123456789101112n
// console.log(typeof bigNumber) // returns "bigint"




//********  Reference (Non-primitive)

//Array, Objects, Function, //Datatype are knoen as function objects in javascript

const heros = ["shaktiman", "IronMan", "SpiderMan"] // Array
// console.log(typeof heros) // returns "object", because arrays are objects in JavaScript

//objects
let myObj = {
  name: "Upendra",
  age: 30,
}
// console.log(typeof myObj) // returns "object", because objects are also objects in JavaScript


// function
const myFunction = function () {
  console.log("Hello, this is a function");
}
// console.log(typeof myFunction) // returns "function", because functions are also objects in JavaScript



//******* Memory ***************

// Stack (Primitive), Heap (Non-primitive)

//stack
let myName = "Upendra" // stored in stack
let anotherName = myName // anotherName points to the same value in stack
anotherName = "Shaktiman" // now anotherName points to a new value in stack, myName still points to "Upendra"
console.log(myName)
console.log(anotherName)

//heap
let userOne = {
  email: "upendra@google.com",
  id: 10,
} // stored in heap

let userTwo = userOne

// userTwo.email = "mahatara@gmail.com"

console.log(userOne.email) // "
console.log(userTwo.email) // "