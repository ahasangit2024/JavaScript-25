const accountId=144553
let accountEmail="ahasanhabib9883@gmail.com"
var accountPassword="Ahasan@123"
accountCity="Kolkata"
let accountState; //isko print karne pe value undefined dega
// accountId=2 //not allowed

accountEmail="habib706302@gmail.com"
accountPassword="Habib@123"
accountCity="Durgapur"

console.log(accountId); //Account id to print hua hai but ek ek kar ke print karna sabhi ko muskil hai

//Isiliye hum dusra cheez use karenge
/*
 Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //console.table se hum table form me likh sakhte hain.