"use strict"; //Treat all js code as newer version of js 

/* Pehle js ka old version rehta tha aur whai engine k through run hota tha aur old version k bina change kiye
abhi jab newer version aya tab ek pure code ko newer version k tara treat karne k liye
 "use strict" use karte hain aur ye bhi ab engine k through run hota hai. */

//alert(3+3) //we are using node.js not browser for this it's showing error.

//agar browser me likhhe to print hoga kyuki waha already browser k andar v8 engine hai.

let name="Ahasan" //automatically detect string data type
let age=21        //automatically detect number data type
let isLoggedIn=false //automatically detect bool data type

//DATA TYPES
//number => 2 to the power 53
//bigint => mostly use when the number is very big likely in trading ,stock market reddit etc.
//string=> ""
//boolean=> true/false
//null =>standalone value // assume it we fetch any data from database there the value is not present it shows null
//undefined => type is defined but wee didn't give any value then it shows undefined
//symbol => to find the uniqueness.


console.log(typeof "Ahasan"); //Type bata ta hai jaise ye string
console.log(typeof undefined); //undefined
console.log(typeof null);   //object