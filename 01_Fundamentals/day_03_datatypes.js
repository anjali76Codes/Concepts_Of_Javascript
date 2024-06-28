/*
Two types of data types in js - 
1.Primitive 
2.Non primitive 
*/

/*
Primitive data types are categorized in 7 category
*String
*Boolean
*Number(-ve,+ve,decimal,fractional etc.)
*BigInt
*undefined
*Symbol
*null
*/



console.log(typeof(-8.9866))
console.log(typeof("Hey Anjali!!!,nice to meet you"))
// here i can't write new line string when i am using ""and ''

// but here I can due to backtick symbol
console.log(typeof(`Hello Anjali!!!
Nice to meet you `))


//conversion of string to number-->
//output--> string
            number
console.log(typeof('70'))
console.log(typeof(+'70'))


/*
Symbols are a data type introduced in ECMAScript 6 (ES6), adding a new primitive type to JavaScript.
 They are unique and immutable primitive values that can be used as identifiers for object properties. Unlike strings or numbers, symbols are guaranteed to be unique.
  Even if you create two symbols with the same description, they are completely different values.
 */

 const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false