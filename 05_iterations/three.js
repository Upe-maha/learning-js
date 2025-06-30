// ==== Array Specific loops.
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const element of arr) {
  // console.log(`Value of arr is : ${element}`)
}

let greetings = "Hello World!"

for (const greet of greetings) {
  // console.log(greet)
}


//Map

const map = new Map()
map.set('Np', 'Nepal')
map.set('In', 'India')
map.set('Ch', 'China')
map.set('Ch', 'China')

// console.log(map)

for (const [key, value] of map) {
  // console.log(key + ' :- ' + value)
}


const myObject = {
  game1: 'GTA',
  game2: 'PUBG',
  game3: 'Spiderman'
}
// for (const [key, value] of myObject) {
//   console.log(key + ' :- ' + value)
// } //myObject is not iterable

