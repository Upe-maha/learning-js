//singleton
// const tinderUser = new Object() //this is a singelton object decleration
const tinderUser = {} // this is object leterals decleration

tinderUser.id = "123abc"
tinderUser.name = "Namaindra"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "nama@gamil.com",
  fullname: {
    userFullName: {
      firstname: "Namaindra",
      lastname: "Mahatara"
    }
  }
}

// console.log(regularUser.fullname.userFullName.firstname);
// const ram = {

// }
const obj1 = {
  1: 'a',
  2: 'b'
}
const obj2 = {
  3: 'a',
  4: 'b'
}
const obj4 = {
  5: 'a',
  6: 'b'
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3)
// console.log(obj3 === obj1);

const user = [
  {
    id: 1,
    name: "Ram"
  },
  {
    id: 2,
    name: "Upendra"
  },
  {
    id: 3,
    name: "Shyam"
  },
]

console.log(user[1].name)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

