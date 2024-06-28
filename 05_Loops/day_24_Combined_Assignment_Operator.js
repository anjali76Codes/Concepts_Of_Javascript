/* Compound (Combined Assignment ) Operator
 += Addition Operator
 -=  Substitution Operator
 *= Multiplication Operator
 /= Division Operator
 **= Exponentiation Operator
  %= Remainder Operator

   Increment ++
   Decrement --
 */


 // If I define a variable using const and then try to change its value, it is not possible.

const num1 = 5;
// num1 += 4;  // This will throw an error because num1 is a constant and cannot be reassigned.

// console.log(num1);  // This line will not be reached due to the error above.

// However, let allows reassignment because it creates a new address for each modification.
let num = 5;
num = num + 2;  //  7

num += 4;  
console.log(num);  //  11


    
    num -= 4   
    console.log(num)  //7

    
    num *= 4  
    console.log(num)  // 28

    
    num %= 3
    console.log(num)  //1

    
    num /= 4
    console.log(num)  //  0.25

    
    num **= 4
    console.log(num)  //

    let number = 4
    console.log(++number)  //   5
    console.log(number++)  // 5
    console.log(number)   // 6

    console.log(number--) // 6
    console.log(number)   // 5
    console.log(--number)  // 4

    






