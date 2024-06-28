// lexical and block scope
// Scope -->   that child scopes have access to parent scopes, but not vice versa.

// 'use strict'  // when we use this we gat an error

function add() {           // Function has its own local scope
    const a = 9;           
    const b = 3; 
    const c = 25         
    console.log(a + b);  
   
    // console.log(x-y) // not possible
 
    function child() {           
        const x =20;           
        const y = 10;
        num = 200;

      //  If 'num' is assigned without declaration, it becomes a global variable accessible anywhere(window). To avoid this  we use 'use strict'.
   
        console.log(x - y);    

        
    function grandchild() {           
        const m = 10;           
        const n = 3;          
        console.log(m+n);  
        console.log(c)   // here c is in closure 


        // Variables in outer scopes can be accessed in inner scopes, but not vice versa
        
    }

{
    //    Block scope --> The scope created with a pair of curly braces (a block).


   // const and let are block-scoped, but var is function-scoped.
        const num1= 10
        let num2 = 20
        var l=num3 = 30

    }
     
    grandchild()   // function call

    }

    child()
 
}

add()
// child()  // error 
// grandchild() // error --> not defined

console.log(num)


// Lexical scope --> Lexical scope means that an inner function can use variables from its outer function




