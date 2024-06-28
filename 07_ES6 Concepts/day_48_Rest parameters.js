const array = [4, 7, 6, 8, 9, 12];

// ...nums is --> rest parameters
function add(...nums) {
    console.log(nums);
    return nums;
}


const result = add(1, 2, 3);
add();
console.log(result);


function adds(a, b, c, ...nums) {
    console.log(a, b, c);
    
    //  the rest of the arguments as an array
    console.log(nums);
    return nums;
}

adds(1, 2, 3); // a = 1, b = 2, c = 3, nums = []
adds(1, 2, ...array); // a = 1, b = 2, c = 4, nums = [7, 6, 8, 9, 12]
adds(2, 4); // a = 2, b = 4, c = undefined, nums = []

// 1st method to convert arguments into an array using rest parameters
function a1(...nums) {
    const sum = nums.reduce((acc, curr) => acc + curr);
    console.log(sum);
    return sum;
}

// 2nd method to convert arguments into an array using 'arguments' object and spread operator
function a2(...nums) {
    // 'arguments' is an array-like object, but not an array
    // Using spread operator to convert it to an array and then reduce
    return [...arguments].reduce((acc, curr) => acc + curr);
}

// 3rd method to convert arguments into an array using Array.from
function a3(...nums) {
    // Array.from converts 'arguments' object into an array
    return Array.from(arguments).reduce((acc, curr) => acc + curr);
}

// Testing a1 function
const reduceResult = a1(...array);
console.log(reduceResult);


// Explanation of rest parameters:
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// Syntax: function fn(...args) { /* args is an array */ }
// Example: 
// function exampleFunction(...args) { 
//     console.log(args); 
// }
// exampleFunction(1, 2, 3); // Output: [1, 2, 3]
