// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the number")
  }
  // console.log(element)

}
// console.log(element)

// nested loop
for (let i = 0; i <= 10; i++) {
  // console.log(`Table of: ${i}`)
  for (let j = 0; j <= 10; j++) {
    // console.log(`Innerloop: ${j} and ${i}`)
    // console.log(i + " * " + j + " = " + i * j)
  }
}

myArray = ["flash", "batman", "superman"]
arrayLength = myArray.length
// console.log(arrayLength) //3
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  // console.log(element)
}


// break and continue:
//affect control flow

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected 5")
    break;    // used of exiting the control flow
  }
  console.log(`value of i is: ${index}`)
}
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected 5")
    continue;    // used of continueing control flow // forgive
  }
  console.log(`value of i is: ${index}`)
}

