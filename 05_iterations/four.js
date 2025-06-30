// for in loop


const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
  py: "python"
}

for (const key in myObject) {
  // console.log(`key of object ${key} and value ${myObject[key]}`)
  // console.log(`${key} shortcut for ${myObject[key]}`)

}

const programming = ['js', 'rb', 'py', 'java', 'swift', 'cpp']
for (const key in programming) {
  // console.log(programming[key])
}

const map = new Map()
map.set('Np', 'Nepal')
map.set('In', 'India')
map.set('Ch', 'China')
map.set('Ch', 'China')

// for (const [key, value] in map) {
//   console.log(key) // map is not iterable
// }
