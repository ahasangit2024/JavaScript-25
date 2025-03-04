let score=33   // from here o/p is number for both

console.log(typeof score); 
console.log(typeof (score));


let Score="33"   

console.log(typeof Score); // Output is string
console.log(typeof (Score)); // Output is string
let ValueInNumber=Number(Score)
console.log(typeof ValueInNumber); // Output is number (Ye iska type hai ab)

//Check karna hai kiya ise bhi number convert karega......??
let value="33abc" 

console.log(typeof value); // Output is string
console.log(typeof (value)); // Output is string

let valueInNumber=Number(value)
console.log(typeof valueInNumber);// Output is number 
 // conversion er somoy convert hoye jai but eta NaN mane not a number show korbe

console.log(valueInNumber); // output is NaN- Not a number, bcz "33abc" is not a number



let V1=null   

console.log(typeof V1); // Output is object
console.log(typeof (V1)); // Output is object

//number me convert hoga hai ya nahi check kar rahe hai
let valueInV1=Number(V1)
console.log(typeof valueInV1); // Output is number
console.log(valueInV1); // null ka value hai 0



let V2=undefined   

console.log(typeof V2); // Output is undefined
console.log(typeof (V2)); // Output is undefined

//number pe convert ho raha hai ya nahi check kar rahe hai
let valueInV2=Number(V2)
console.log(typeof valueInV2);// Type is number
console.log(valueInV2);// undefined in also NaN


let V3=true 

console.log(typeof V3); // Output is boolean
console.log(typeof (V3)); // Output is boolean

//number pe convert ho raha hai ya nahi check kar rahe hai
let valueInV3=Number(V3)
console.log(typeof valueInV3);// Type is number
console.log(valueInV3);// value of boolean(true) is 1


let V4=false

console.log(typeof V4); //Output is boolean
console.log(typeof(V4)); //Output is boolean

let valueInV4=Number(V4) //number e convert kora jai kina dekhchi
console.log(typeof valueInV4); //Iska type bhi number hi hoga
console.log(valueInV4); // value of boolean(false) is 0

let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn); //iska type hai boolean
console.log(booleanIsLoggedIn);// value aya True

/*Notes:
 1=> True; 0=> False
 ""(empty string) => false
 "Ahsan"(string) => True
*/

let someNumber=14
// Number se string convert
let stringNumber=String(someNumber)
console.log(typeof stringNumber); //type convert hoke aya hai string
console.log(stringNumber);



