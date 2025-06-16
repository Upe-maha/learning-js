const accountID = 14455
let accountName = "John Doe"
let accountEmail = "upendra@gmail.com"
var accountPassword = "12345678"// not a good it pratice
accountCity = "New York"//not a good it practice
//accountID = 2 //not allowed

accountEmail = "upendra.com"
accountPassword = "87654321"
accountCity = "Kathmandu"
let accountState


console.log(accountID);
/*
Prefere not use var
Because of issue in block scope and function scope
*/
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
