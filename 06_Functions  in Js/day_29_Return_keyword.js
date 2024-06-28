// Function with a return value
// The function returns the result of the computation.

function calculateNum() {
    console.log('hello');
    return 5 + 5; // returns 10; if a function does not have a return statement, it returns undefined
}
const res = calculateNum();
console.log(res); // 10

// Sum of two numbers
function calculateSum(a, b) {
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return sum; // returns the sum 14
}

calculateSum(10, 4); // 14

// Subtraction of two numbers
function calculateSub(a, b) {
    let sub = a - b;
    console.log(`The subtraction of ${a} and ${b} is ${sub}`);
    return sub; // returns the difference  7
}

calculateSub(10, 3); // 7

function addToNumbers(a, b) {
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
    return sum;
}


addToNumbers(20 - 10 + 10, 10 + 5 - 2);

// Function calls,  nested calls
addToNumbers(addToNumbers(23, 45), addToNumbers(10, 12));
