// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["SuperMan", "IronMan", "SpiderMan"]

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1])

// Array Methods

// myArr.push(6) // add a value
// myArr.pop() // remove the last value in myArr

// myArr.unshift(9) // Shift all the elements and add element at the first index of array.
// myArr.shift() // pop the first element from array, and shift all the elements

// console.log(myArr.includes(9)) // boolean type result
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof (newArr)); // Type is String type.

// +++++++++++ slice, splice

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) // slice doesnot affect the original array,
console.log(myn1) //[ 1, 2 ] // and it doesnot contain full range 
console.log("B ", myArr) //B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3) // splice does affect the original array
console.log("C ", myArr) //C  [ 0, 4, 5 ]
console.log(myn2) //[ 1, 2, 3 ] // It contain full range




