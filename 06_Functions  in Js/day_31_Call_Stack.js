function introduceME() {
    console.log("Hello"); // This prints "Hello" to the console.
   introduceME();  // This calls introduceME() recursively, without a base case.
}

introduceME(); // Initial call to introduceME().

/*

 Call Stack - 
The call stack is a data structure used by JavaScript to manage function execution. When a function is called, it is added (or "pushed") onto the top of the call stack. When the function completes its execution, it is removed (or "popped") from the stack. This allows the program to keep track of which function is currently running and where it should return once that function finishes.

# How It Works in our Code

1. introduceME() is called for the first time.
2. The call to introduceME() is pushed onto the call stack.
3. Inside introduceME(), console.log("Hello") is executed, printing "Hello" to the console.
4. introduceME() calls itself again before it finishes.
5. The new call to introduceME() is pushed onto the stack.
6. Steps 3-5 repeat indefinitely, with each new call to introduceME() being pushed onto the stack.

# Stack Overflow
In this code, introduceME calls itself recursively without any termination condition (base case). This creates an infinite recursion because there is no point where the function stops calling itself.

As a result, the call stack keeps growing as new calls to introduceME are added. Since the stack has a limited size, eventually it will exceed the maximum stack depth allowed by the JavaScript engine, leading to a stack overflow error. When this happens, the program crashes with an error message, such as "RangeError: Maximum call stack size exceeded".

Here's how the stack overflow occurs in our code:
1. introduceME() is called and added to the stack.
2. Inside introduceME(), it calls itself again, adding another introduceME() call to the stack.
3. This process repeats, continuously adding new calls to the stack without ever removing any.
4. The stack reaches its maximum capacity, causing a stack overflow.

# Summary
The call stack is essential for managing function calls in JavaScript. However, recursive functions must include a base case to stop the recursion. Without a base case, as seen in your introduceME function, the stack will keep growing until it overflows, resulting in a crash.
*/
