// do-while loop

/* In a do-while loop, the code inside the loop executes at least once, 
 then it checks the condition. If the condition is found false, it exits the loop 
 and executes the next line outside of the loop.
 */

let i = 10;
do { 
    console.log(i);
    i++;
} while (i < 5);     // return false exit the loop

console.log(i);  //  11

 /*In while loops and do-while loops, when we initialize a variable, it is accessible 
 outside the loop, meaning it has a wider scope. 
 However, in a for loop, the variable declared inside the loop is only accessible 
within the loop block. After exiting the loop, if we check the value of the variable, 
 it will show undefined, meaning it does not occupy memory space outside the loop block.
 */


 
