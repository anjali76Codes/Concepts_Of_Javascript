// Hoisting - before declaring, we can access the value 

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to the execution of the code.
console.log(a);  // undefined

var a = 10; 

console.log(a);  // 10

// However, if I declare the variable with the data type const or let, it gets hoisted but will be protected in the temporal dead zone.
// Temporal Dead Zone - the area of a block where a variable is inaccessible, so we get an error in the case of let & const.

// console.log(a); // not accessible  -> Invalid
// const a = 30;

// function call
introduceME();  // valid

// function definition
// function declaration acts as a variable, not a function, and will get hoisted

// In function expression
function introduceME() {
    console.log("Hey Anjali");
}

// If I declare a function using a variable with const or let, it acts as a variable; hence, when we try to access the variable or function, it will not allow access.

sayHi();  // Invalid 

// function definition
// function expression
const sayHi = function () {  // here, either we can give the function a name or not; there's no point in giving the function a name because it can't be stored in the memory

    console.log("Hii");
}

sayHi();

sayhi();  // Here it will show an error -> sayhi is not a function, and undefined is not a function. We are trying to call an undefined value, hence an error will occur.

var sayhi = function() {  // anonymous function

    console.log("Hii");
}

/* Summary:
1. Variables declared with 'var' are hoisted and initialized with 'undefined'.

2. Variables declared with 'let' and 'const' are hoisted but not initialized, leading to a temporal dead zone (TDZ).

3. Function declarations are hoisted entirely, meaning they can be called before their definition.

4. Function expressions assigned to 'var', 'let', or 'const' are not hoisted in the same way and behave like variables.
*/
