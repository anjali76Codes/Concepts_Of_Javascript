function outer() {
    const age = 21;

    function parent() {
        const a = 10;
        const b = 14;

        function add() {
            console.log(a + b); // Accessing variables from the parent function (closure)
            console.log(age);   // Accessing variable from the outer function outer() (closure)
        }

        return add; // Return the add function, which creates a closure over variables a, b, and age
    }

    
    const functionReturn = parent(); // Call parent to get the add function
    functionReturn(); // Execute the add function, demonstrating closure
}

outer();