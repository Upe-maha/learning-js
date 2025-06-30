const userEmail = []

// if (userEmail) {
//   console.log("Got user Email.")
// } else {
//   console.log("User Email not avilable.")
// }

// Falsy Value.

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy value
// '0', 'false', ' ', [], {}, function () {}

// how to check empty array.

// if (userEmail.length === 0) {
//   console.log("Empty array.")
// } else {
//   console.log("Not an empth array.")
// }


// how to check object

const userObj = {}

// if (Object.keys(userObj).length === 0) {
//   console.log("Empty Object.")
// } else {
//   console.log("Nor an empty object.")
// }


// >>>>>> nullish coalescing Operator ??: null/undefine
// let result = value ?? defaultValue;

let val1;
val1 = 0 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10  //=> If value is null or undefined the default value is added.
val1 = null ?? 10 ?? 20
console.log(val1)


let name;
let displayName = name ?? "Guest"
console.log(`Welcome, ${displayName}`)

let score = 0;

let result1 = score || 10 //doesnot take falsy value like 0
let result2 = score ?? 11 //does take falsy value.

console.log(result1, result2)


//>>>>>> Ternary Operator
// condition ? true:false

const iceTeaPrice = 100;
(iceTeaPrice > 100) ? console.log("Greater than 100") : console.log("Lesser than 100")