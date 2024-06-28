 /*
 Comparison Operator
1. == equal to [equality] (It does implicit conversion (automatic))
2. === equal value and equal type(strict equality) [we have to do explicit conversion (manual)]
3. ! not equal to 
4. != not equal value or not equal type(strict)
5. >  greater than 
6. < less than
7. >= greater than or equal to
8. <= less than or equal to 
 */

const num1 = 45
const num2 = 20
const userInput = '45'
console.log(num1== num2) // false

console.log(num1==userInput) // true  here  due to implicit conversion comparison is possible between string and number 
 console.log(num2==userInput)  // false

 // but to do exact comparison  - strict equality comparison 
 console.log(num1===userInput)  // return  false

 // in strict equality -->  need to do manually conversion
 console.log(num1=== +userInput) // return true 


 // we can use + operator or parseInt both converts string into a number
 console.log(num1=== parseInt(userInput)) // true
 const name = "Anjali"
 console.log(parseInt(name))  // Nan


 console.log(num1 != num2) //true
 console.log(num1 !== userInput)  //true 
 

 const firstNum = 100.999
 const secondNum = 20
 const thirdNum = 20
 const fourth = 101

 console.log(firstNum> secondNum)  // true
 console.log(secondNum< firstNum)  // true
 console.log(thirdNum>= firstNum) //false
 console.log(thirdNum<=secondNum)  // true
 console.log(fourth>=Math.round(firstNum)) //true

