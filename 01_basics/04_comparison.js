console.log("2">1);// Output is true
console.log("02">1);// Output is true


console.log(null>0); //Output is false
/*Yahaan "null" ko number me convert kiya ja raha hai comparison ke liye.
👉 JavaScript me null ko number banaya jaye to ye 0 hota hai.
👉 To comparison 0 > 0 banta hai, jo false hai.*/

console.log(null==0);// Output is false
/*
👉 Equality (==) type conversion rules alag follow karta hai.
👉 "null" aur "0" kabhi bhi equal nahi hote.
👉 Isliye null == 0 false hota hai.
*/ 
console.log(null>=0);// Output is true
/*
👉 Yahaan >= ek comparison operator hai, jo internally null ko 0 me convert kar deta hai.
👉 To expression 0 >= 0 ban jata hai, jo true hai.
*/
/*Notes:
✔ Comparison (>=, >, <, <=) → null convert ho jata hai 0 me.
✔ Equality (==) → null kabhi bhi kisi number ke equal nahi hota.
*/


console.log(undefined==0);
/*
👉 Equality (==) me undefined sirf null ke equal hota hai, kisi aur value ke nahi.
👉 Undefined aur 0 equal nahi hote, isliye output false aayega.
*/

console.log(undefined>0);
/*
👉 Comparison (>, <, >=, <=) operators undefined ko NaN (Not a Number) bana dete hain.
👉 NaN kisi bhi number ke saath compare ho to result hamesha false hota hai.
👉 Isliye undefined > 0 false hoga.
*/
console.log(undefined<0);

/*
👉 Yahaan bhi undefined NaN ban jayega.
👉 Aur NaN kisi bhi number se compare ho to false deta hai.
👉 To undefined < 0 bhi false aayega.
*/

// ===

console.log("2"===2);
/*
👉 === (Strict Equality) operator type conversion nahi karta.
👉 "2" ek string hai, aur 2 ek number hai.
👉 Kyunki type different hai (string ≠ number), isliye result false aayega.

console.log("2" == 2);  // true  (because `==` converts "2" to number)
console.log("2" === 2); // false (because `===` checks both type and value)
*/