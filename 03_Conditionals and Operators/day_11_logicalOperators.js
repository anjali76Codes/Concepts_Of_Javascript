/*
Logical Operators 
Logical operators  are actually return falsy or Truthy value 
1.AND &&
2.OR ||
3.NOT !
 */

// &&(And) - if both statements are correct then it return true else false
const userAge = 20
const isCollegeStudent = console.log(userAge>20 && userAge<=24 ) //false
const isSchoolStudent = console.log(userAge>5 && userAge<=20) //true
console.log(isCollegeStudent || isSchoolStudent)

// ||(or) -if any one of the statement is correct it return true else false
console.log(isCollegeStudent || isSchoolStudent) // true

// This return falsy and truthy value  due to this if we use logical operator between two numbers so it check for truthy and falsy value and according to that return that  value
console.log(3 && 6) // here 3 and 6 both are truthy value so this return - 6(truthy)

console.log(0 && 4) // here 0 is falsy value so this return - 0(falsy)
console.log(3 || 5) // return - 3
console.log(0 || 3) // return - 3

// if we want result in true or false so  can use  Boolean
console.log(Boolean(0 && 4)) // false
console.log(Boolean(0 || 3)) //true
console.log(Boolean('' && NaN)) //false

// && - return first if first value is falsy  else return second  
console.log(3 && 7) //7
console.log(0 && 7) // 0
console.log('' && NaN) // ''

// || - return first if first value is truthy  else return second  
console.log(3 || 7) //3
console.log(0 ||7) // 7
console.log('' || NaN) // NaN

//Examples
const andResult1 = 'Anjali' && null  // null
console.log(andResult1)
const orResult1 = 'Anjali' || null   // 'Anjali'
console.log(orResult1)
const andResult2 = 'Anjali' && 4+12  //16
console.log(andResult2)
const orResult2 = 'Anjali' || null  //'Anjali'
console.log(orResult2)
const andResult3 = undefined &&  5*5 // undefined
console.log(andResult3)
const orResult3 = undefined ||  1+3 *4   //13
console.log(orResult3)

 const res = console.log('Anjali')  // print - Anjali but return  undefined
 console.log(3 &&  console.log('Anjali'))  // undefined


//Not
// here empty string('') is falsy value but due to Not ! operator it becomes truthy and in && if first is not a falsy value then it return second value i.e 4
console.log(!'' && 4)   // 4

// same here 4 is truthy but due to ! operator it becomes falsy so in 
// || - if first  value is not truthy then it return second i.e null
console.log(!4 || null)  //null 

const value1 = 30
console.log(!(value1 >40))  // true
console.log(!!(value1 >=40))  // false



