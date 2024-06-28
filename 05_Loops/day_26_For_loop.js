// for loop 
//for(initialize ; Condition ; update )


    // print 1 to 100
    // for (let i = 1; i<=100 ; i++){
    //     console.log(i)
    // }

    
let friendsGroup = ['Anjali', 'Teena', 'Sanjana', 'Kashish' , 'Aisha', 'Avni']

for (let i = 0 ; i<friendsGroup.length ; i++){
    console.log(friendsGroup[i])
}


// Even between 1 to 100

for(let i = 1 ; i<= 100 ; i++){
    if(i%2 == 0 ){
       
        console.log(`${i}`)
    }
}



// Check Even or Odd
let numArray = [4,7,90,9,2,5,10]

for(let i = 0 ; i<numArray.length ; i++){
    if(i %2==0){
        console.log(`${numArray[i]} is an even number`)
    }
    else{
        console.log(`${numArray[i]} is Odd number`)
    }
}
console.log("Program Ended!!!")