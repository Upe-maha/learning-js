
var c = 300
let a = 100
const b = 200

if (true) {
  let a = 10
  const b = 20
  var c = 30
  // console.log("inner", b)
}

// console.log(a)
// console.log(b)
// console.log(c)
// const array = [1, 2, 3, 4, 5]

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element)
// }


// closer
function one() {
  const username = "Upendra";
  function two() {
    const website = " Facebook"
    console.log(username + website)
  }
  // console.log(website)
  two()
}
// one()

if (true) {
  const username = "Upendra";

  if (username === "Upendra") {
    const website = " youtube";
    // console.log(username + website)

  }
  // console.log(website)
}
// console.log(username)

console.log(addOne(5));
function addOne(num) {
  return num + 1
}

console.log(addTwo(4))
const addTwo = function (num) {
  return num + 1
}


