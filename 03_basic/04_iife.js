// Immediately Invoked Function Expressions (IIFE)
//Always put a semicolon before an IIFE if it's not the first statement in the script.

(function chai() {
  // named iife function
  console.log(`DB CONNECTED.`)
})();


(() => {
  //not named
  console.log(`DB CONNECTED.`)
})();

//aegument and parameters.
((name) => {
  console.log(`DB CONNECTED, ${name}`)
})("Upendra")
