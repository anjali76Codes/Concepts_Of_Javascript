const fruits = ['Apple' , 'Banana' ,'Orange' , 'Peach']

for(let i = 0 ; i<fruits.length ; i++){
    console.log(fruits[i])
}


console.log("Next For loop result !!")


// if we are using var then result will store to the global scope as executed and at the end of the loop last return is remain in fruit not vanish
for(var fruit of fruits){
    console.log(fruit)
}


// In case of const or let it store the result in the block scope so after the loop end it get vanished from the memory so its a better to  use const during loops (const must be refer)
for(const fruit of fruits){
    console.log(fruit)
}

const userDetails  = {
    firstName : "Anjali",
    lastName : "Gupta" ,
    Age : 21 ,
address: {
 state: 'Maharashtra',
 city : 'Mumbai' , 
 pincode : 421305,

}

}


// this is not applicable for object because Object is not iterable where as Array is iterable 

// for(const key of userDetails){
//     console.log(key)
// }


// for object we need to use  for..in loop 

for(const key in userDetails){
    console.log(key , ":", userDetails[key])
}


const userDetailsArray = Object.keys(userDetails)
for(const key in userDetailsArray){
    console.log(key)
}

for(const key of userDetailsArray){
    console.log(key)
}


// keys --> keys in array
const detailsKey = Object.keys(userDetails)

// values --> values in array
const detailsValue = Object.values(userDetails)

// Entries --> create array inside array
const detailsEntries = Object.entries(userDetails)

console.log(detailsEntries)

// in keyword - which check keys are present or not
 firstName in userDetails     // return true
branch in userDetails   // false




