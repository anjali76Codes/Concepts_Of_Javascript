function a (b){
    console.log(b)
    console.log(typeof(b)) 
    console.log(typeof(a))   // function
    //  b()  // cause error and show the b is not a function
}
 
a("hii")
a({userName: 'Anjali' ,  age :21})
a([2,5,6,8,8,10])


console.log(a)  // print code as it is

// if we want to print in object format then we need to use dir in case of function only if we pass any string or number it will work as log  --> so basically dir is best as compare to the log because it print also and return  function in object format also
console.dir(a)  
console.log("Anjali")   // direct print Anjali

function sayHi(){
    console.log('Helloooooooo')
}

a(sayHi);   // here sayHi is passed as an argument into the a() function to the b parameter

const m = sayHi
// We can use here both to do changes in the function
m.userName = "anjali"
sayHi.age = 20
sayHi()  // both do the same print Helloooooooo
m()

//* Note : when we pass an argument as a function then main(parent) function becomes higher function
// and if we pass any string and number then the main function is normal function 


//  Anonymous function --> instead of passing function as a parameter with identifier  we can pass directly function into the main function during function call like this :

a(function (){
    console.log('Helloooooooo')
})


// callback function --> the function which pass as a arguments in the main function and  in which pass this that function is called Higher order function


















