// Define an array
 
const fruits = ['Apple', 'Banana', 'Orange', 'Peach'];

// Using a for...of loop to iterate over the array
// This loop will print each fruit in the 'fruits' array

for (const fruit of fruits) {
    console.log(fruit);
}

 
// The forEach method executes the provided function once for each array element

fruits.forEach(function(fruit) {    // Anonymous function
    console.log(fruit);
});


console.log("**********");


// Arrow functions provide a shorter syntax for writing function expressions

fruits.forEach((fruit) => {    // Arrow function
    console.log(fruit);
});

// The return value of the arrow function here is not used by forEach ->  return undefined

fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
    
    // This return statement is not necessary as forEach ignores the return value

    return fruit.toUpperCase();

});
