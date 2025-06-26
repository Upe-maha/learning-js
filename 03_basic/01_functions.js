
function sayMyName() {
  console.log("U")
  console.log("P")
  console.log("E")
  console.log("N")
  console.log("D")
  console.log("R")
  console.log("A")
}

// sayMyName()

function addTwoNumbers(numbre1, number2) {
  // console.log(numbre1 + number2)
}
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  console.log("upen")
  return number1 + number2
  console.log("Upendra") // nothing runs after return
}
// const result = addTwoNumbers(2, 3)
// console.log("Result: ", result)

// function userLoginMessage(userName) {
//   // if (userName == undefined) {
//   //   console.log("Please enter user's Name.")
//   //   return
//   // }
//   if (!userName) {
//     console.log("Please enter user's Name.")
//     return
//   }
//   return `${userName}, Just logged In.`
// }


// ADD a default value to completely ingone
function userLoginMessage(userName = 'Upen') {
  // if (userName == undefined) {
  //   console.log("Please enter user's Name.")
  //   return
  // }
  if (!userName) {
    console.log("Please enter user's Name.")
    return
  }
  return `${userName}, Just logged In.`
}

// console.log(userLoginMessage("Upendar"))
// console.log(userLoginMessage())

// rest operator

function calculateCartPrice(value1, value2, ...num1) {
  return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400, 500))

// object
const user = {
  userName: "Upendra",
  prices: 300
}

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.userName}, and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
  userName: "Sam",
  price: 300
})

const myNewArray = [100, 200, 600];
function returnSecondVale(getArray) {
  return getArray[1]
}

// console.log(returnSecondVale(myNewArray))
console.log(returnSecondVale([100, 400, 60, 700]))

// let userName;
// console.log(!userName)



