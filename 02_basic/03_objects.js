// singleton

// objects literals
// Object.create

//using Symbol as object literals

const mySym = Symbol("Key1");

const JsUser = {
  name: "Upendra",
  "full name": "Upendra Mahatara", // in ""
  [mySym]: "MyKey1", // using []
  age: 18,
  location: "Jumla",
  email: "upendr@googl.com",
  isLoggedIn: false,
  lastLoggInDays: ["Monday", "Saturday"]
};
// How to access;
// console.log(JsUser.email);
// console.log(JsUser["email"]); // every key in the object are by default string typeof
// console.log(JsUser["full name"]);
// console.log((JsUser[mySym]));

// to change literals
JsUser.email = "upekhampa@gamil.com" // override
// Object.freeze(JsUser)// this makes object immutable/ unchangable

JsUser.email = "upen@chatgpt.com" // email is not overritten
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

