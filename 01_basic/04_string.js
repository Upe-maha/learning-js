const name = "Upendra";
// const repoCount = 50;

// console.log(name + repoCount + "value"); //not recomended

//Now a days use back ticks " `` "
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Upendra-UM-com") // this is a String object, not a primitive string

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length) // length of the string object
// console.log(gameName.toUpperCase()) // convert to uppercase

// console.log(gameName.charAt(4))
// console.log(gameName.indexOf("d"))

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    hitesh      "
console.log(newStringOne)
console.log(newStringOne.trim()) // we can also use **trimStart() and **trimEnd()
const url = "https://www.chess.com/play%20online"

console.log(url.replace("%20", "/"))
console.log(url.includes("game"))

console.log(gameName.split("-"))

