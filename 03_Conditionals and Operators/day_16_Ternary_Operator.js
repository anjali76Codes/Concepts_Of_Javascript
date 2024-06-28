//Ternary Operator


const num = 3    // true
const  result = num <5 ? `  ${num}  is less than 5` : `${num}  is greater than 5`

console.log(result)
const gender = 'F'


// if condition is true then first statement will execute otherwise second statement will execute
const result1 =`${gender.toLowerCase()==='f' ? 'She': 'He'} is a college student`
console.log(result1)

const age = '20'   // 20 is a string so it will return the second statement
const userAge = age ===20 ? "UserAge is 20":"UserAge can be more than 20 or less than 20"
console.log(userAge)

// here if we are using truthy and falsy value
const userName = ''   // empty string - falsy value
const result2 = userName ? " userName is truthy value" : " userName is falsy value"  
console.log(result2)


// here null is falsy value then it return 0 
const result3 = null ? "true": "zero"
console.log(result3)
