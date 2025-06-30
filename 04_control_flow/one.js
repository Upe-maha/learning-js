//if
const isUserLoggedIn = true

if (isUserLoggedIn) {

}
//comparision
// <, >, <=, >=, ==, !=, ===

// if (2 == "2") {
//   console.log("Exicuted")
// }
// if (2 === "2") { // strick equal also check data types.
//   console.log("Exicuted")
// }

// if (2 != 3) {
//   console.log("exicuted")
// }
const temperature = 50;
// if (temperature > 50) {
//   console.log("Less than 50.");
// } else {
//   console.log("Temperature is grater than 50")
// }
// console.log("Execute")

// const score = 200

// if (score > 100) {
//   let power = "fly";
//   console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

// ShortHand notataion

const balance = 1000;
// unreadable code, not recommended, not a good pratice
// if (balance > 500) console.log("test"), console.log("test2");

// Ternary operator 
const age = 12;
// let result = (age < 18) ? "Not Adult" : "Adult"
// console.log(result)

// (age < 18) ? console.log("Not Adult") : console.log("Adult")

// if (balance < 500) {
//   console.log("Less Balance.")
// } else if (balance < 800) {
//   console.log("Medium Balance.")
// } else {
//   console.log("Higher Balance.")
// }
// if (balance < 500) {
//   console.log("Less than 500.")
// } else if (balance < 800) {
//   console.log("less than 800.")
// } else if (balance < 900) {
//   console.log("less than 900.")
// } else {
//   console.log("less than 1100")
// }



// ===== Logical operator.

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 32) {
  console.log("Allow to purchase/buy products.")
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("Sucessfuly loggedIn.")
}

if (!loggedInFromGoogle && !loggedInFromEmail) {
  console.log("ram")
}
