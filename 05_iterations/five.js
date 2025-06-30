// for each

const coding = ["JavaScript", "Python", "C++", "Java", "ruby"]

// coding.forEach((item) => {
//   console.log(item)
// });

// coding.forEach(function (item) {
//   console.log(item)
// })

function printme(item) {
  console.log(item)
}

// coding.forEach(printme)

const printcode = (item) => {
  console.log(item)
}

// coding.forEach(printcode)

const printus = function (item) {
  console.log(item)
}

// coding.forEach(printus)

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr)
})


// array in object

const myCoding = [
  {
    LanguageName: "JavaScript",
    LanguageFileName: "js"
  },
  {
    LanguageName: "Java",
    LanguageFileName: "java"
  },
  {
    LanguageName: "Python",
    LanguageFileName: "py"
  }
]

myCoding.forEach((item) => {
  console.log(item.LanguageName)
})