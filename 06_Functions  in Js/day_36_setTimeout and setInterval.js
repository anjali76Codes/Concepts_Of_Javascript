// setTimeout - Asynchronous (first store then execute )

setTimeout('hey!!')  // give  error when we pass the string  because this function create file in behind


setTimeout(`console.log("hey")  // setTimeout - call once
console.log("Anjali")` , 3000)



// each setTimeout having id that return at the end and using this id we can clear the all timeout or stop the execution


 const timer1 = setTimeout(`
 console.log("hey")` )  
 
  const timer2 = setTimeout(`
 console.log("Hey Anjali")` ,4000) 

  const timer3 = setTimeout(`
 console.log("Anjali")` ,5000)   // id return of last one 

 clearTimeout(timer2)



 const timer = setTimeout(
 a ,3000 , "anjali" , 25)    // when 

  //setTimeout already call the function just need to pass the function name


  
 function a(){
   console.log(arguments)  
   // here using this we can access also  by giving index
   console.log(arguments[0])    // anjali
    console.log("number")
 }  


 
console.log("This execute first in all")  // synchronous -> line bye line

// setInterval --> infinite in each second

const time = setInterval (`
console.log("Anjali")` ,1000) 

clearInterval(time)  




