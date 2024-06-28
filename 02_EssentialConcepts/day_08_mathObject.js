/*mathematical operators in JS
1. Addition :+
2.Subtraction : -
3.Multiplication :*
4.Division: /
5.Remainder : %
6.Exponentiation : **
*/


const a = 10
const b = 5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)

//Properties on math object  -> round brackets() are not required
console.log(Math.PI)  
console.log(Math.SQRT2) //Square root of 2
console.log(Math.E) //Euler Value


//Methods on math object  --> () required
const squareRoot = Math.sqrt(361)  //19
console.log(squareRoot)

// powers
console.log(Math.pow(5,3))
console.log(Math.floor(5.34556)) // return 5
console.log(Math.floor(2.99999999999999999)) // return 3 --> give closest of given
console.log(Math.floor(-2.345)) // return -3 -> decreases by 1

//ceil -- give next closest
console.log(Math.ceil(3.45677)) // 4
console.log(Math.ceil(-3.452))  //return -3

//Round - take nearest of the given value
console.log(Math.round(2.56788)) // return 3
console.log(Math.round(-6.08))  // -6
console.log(Math.round(-6.78)) //-7

//Random - between 0 to 1 but not exact 1 
console.log(Math.random())
console.log(Math.random()) // give random value it will give minimum 0 and max closest to 1
console.log(Math.floor(Math.random()*20))
console.log(Math.floor(Math.random()*20))

console.log(8/0) // Infinity - type of this is number
console.log( -8/0)  //   -Infinity
console.log(0/0)  // NaN - type of this is also a number 


//+prompt -  before store make string to a number 
 const len = +prompt("Enter the length of the rectangle :")  
 const  bth = +prompt("Enter the  breadth of the rectangle:")
  console.log(`The Area of the rectangle is :${0.5 *len*bth}`)
