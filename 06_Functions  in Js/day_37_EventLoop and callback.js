console.log('Hey')

function myName(){
    console.log("Anjali")
}

for (let i =0 ; i<=5 ; i++){
console.log(i)
}


function hello(){
    console.log("Hello World!")
}
setTimeout(hello , 300)

setTimeout(function name(){
    console.log(`My name is anjali` , 2000)
})


setTimeout(function a (){
    console.log(`Anjali` , 4000)
} )

console.log("Program ended") 

//  Event loop --> bridge gap between browser and engine 
// check callStack is empty or not
// callback Queue -> all callback function are stored into this and if call stack is empty then this will go and execute

//* Synchronous --> direct in call stack and execute
// * Asynchronous --> first in Web Apis then callback Queue and then  in callStack and execute
e