// Global Execution Context --> Memory Creation Phase 
//                          --> Code Execution Phase

sayHi();  // Function call

// Variable Declarations with let & const
// Memory Creation Phase: Variables are initialized to undefined
// Code Execution Phase: Variables are assigned actual values
let name = 'Anjali';
const age = 21;

// Function Declaration
// In the Memory Creation Phase, the entire function is stored, 
// allowing function calls before the function definition

function sayHi() {
   const a = 10; // Memory Creation Phase: 'a' is initialized to undefined, then in Code Execution Phase: 'a' is assigned the value 10


   const b = 20; // Memory Creation Phase: 'b' is initialized to undefined, then in Code Execution Phase: 'b' is assigned the value 20

    console.log(a, b);   // Outputs: 10 20
    console.log("Hii!");

    // Function call within another function, leading to nested execution contexts

    addToNumbers(10, 4);
}

function addToNumbers(x, y) {
    return x + y;
}
