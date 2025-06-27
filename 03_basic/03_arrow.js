const user = {
  username: "Upendra",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website.`)
    console.log(this)
  }
}

// user.welcomeMessage()
// user.username = "Manisha"
// user.welcomeMessage()
// console.log(this)

// function chain() {
//   let username = "Upendra"
//   console.log(this.username)
// }
// const chain = function () {
//   let username = "Upendra"
//   console.log(this.username)
// }

// Arrow funcion
const chain = () => {
  let username = "Upendra"
  console.log(this)
}
// chain()

//Explicit return

// const addOne = (num1, num2) => {
//   return num1 + num2
// }

//Implicit return
// if you write in {} return is required.

// const addOne = (num1, num2) => num1 + num2

// const addOne = (num1, num2) => (num1 + num2)

const addOne = (num1, num2) => ({ username: "Upendra" })

console.log(addOne(2, 3))

// const myArray = [1, 2, 3, 5]

// myArray.forEach()
