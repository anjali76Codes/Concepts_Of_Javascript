// Arrow function -> mostly similar as a function

 const add = function add (a,b){
    return  a+b
} 

 const square = function square (num){
    return num*num
}



// const result =  (num) =>{   // Arrow function
//     return num + 20
// }



 //arrow function -> property - when only one return value then we can directly written like  this :  called implicit return (Automatic)
const result =  (num) => num *num  //Implicit function

const addResult = (a,b)=> a+b+20

const random = ()=> Math.random()

setTimeout(()=>{
    console.log(`HEllo` , 3000)
})
    






