// default parameters  --> only for undefined

function numbers(a , b= 1){  // default parameters 

    // when any number * undefined --> NaN
    console.log(a*b)  
    return a* b 
}

numbers(10 , 2)  // 20
numbers(10 )  // here only value for a 
numbers(3  , null )   // 0
numbers(3  , undefined )  // NaN  if b is not assigned to  any value
numbers(3  , 0 )  // 0



// console.log(result)

function rollADie(number){
    return  Math.floor(Math.random() * number)
}

rollADie(6)
rollADie(10)



