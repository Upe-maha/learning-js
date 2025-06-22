const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "batman", "flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// concater sprade operator

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // concatnet all the sub-elements
// console.log(real_another_array)

//Converting into array

console.log(Array.isArray("Upendra", "ram"))
console.log(Array.from("Upendra"))
console.log(Array.from({ name: "upendra" })) // intresting, keys or values must be specifies

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

