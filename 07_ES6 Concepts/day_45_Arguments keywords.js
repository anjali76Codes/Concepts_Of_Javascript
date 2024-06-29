function sum( ){   // takes only two arguments value remaining are ignored
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
    console.log(arguments[4])

   
let sum = 0    // sum of all arguments 

for(let i =0 ; i <arguments.length ; i++){
    sum+= arguments[i]
    console.log(sum)
}

// spread operator to convert the arguments into the array
let args = [...arguments];
for(let i = 0 ; i <= args.length  ; i++){
    sum+=args[i]
    console.log(sum)
}

}






sum(3,5,6,7,8,9)      // all are stored in arguments keyword
// sum()  // undefined











