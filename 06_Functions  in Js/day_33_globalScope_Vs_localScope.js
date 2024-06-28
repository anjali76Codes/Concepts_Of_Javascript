// Global vs Local Scope Example

/*
Global Scope
Variables declared in the global scope are accessible from anywhere in the code. In a browser environment:
- Variables declared with var are attached to the window object.
- Variables declared with let and const are not attached to the window object but are still globally accessible within the script.

Local Scope
Variables declared within a function are local to that function. They are not accessible outside the function.
*/

// Call the 'add' function before declaring 'userName' will cause an error
// add();  // This will result in a ReferenceError: userName is not defined

const userName = "Anjali"; // Global scope, accessible anywhere
let age = 21;    // Global scope, but not attached to the window object
var a = 25;       // Global scope, attached to the window  object

function add() {           // Function has its own local scope
    const a = 9;           
    const b = 3;          
    console.log(a + b);    
    console.log(userName); 
}

add();                     

 add(x);    //this will cause an error as 'x' is not defined


function subtract() {      // Another function with its own local scope
     // Local variable a and b, different from the global a and  b the a and b  in add function

    const a = 15;         
    const b = 5;           
    console.log(a - b);    // 10
    console.log(userName); // Outputs "Anjali", accessing global 'userName'
}

subtract();                // Call the 'subtract' function
