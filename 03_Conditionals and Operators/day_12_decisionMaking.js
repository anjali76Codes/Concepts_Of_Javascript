const userName = "Anjali"
const Age = 20
console.log(`UserName: ${userName}`)
console.log(`Age : ${Age}`)

// when true is passing it will execute the given statement  of the console
if (true) console.log("Not execute this ")


// but when false is passing it skip the print statement or not execute the code inside this if condition  and go out the if part and execute further part    
if (false) console.log("Not execute this ")
console.log("Hello Anjali")


// if statement is true then within block present code will execute else  nothing will display and then next  line of  the code(outside the block) will proceed
if(Age >20 && Age <=25){
    console.log("User is a college student")   
}
console.log("Program Ended !")


//*note
// parseINT - change null - NaN and   +  -> change null -  0 

// here if we are parseINT to change string into a number (it is more efficient for string to number conversion)
// if user enter their age - 34k then + is not capable to convert this into a number where parseINT is do easily
// const userAge1 = +prompt("Enter the your age")
// const userAge2 = parseInt(prompt("Enter the your age"))  

const name = "Anjali"
const age = 20
if(age == 20 && age <25){
    console.log(`${name} age is ${age}`)
    console.log(`${name} is a college student`)
}


const userAge = 30
if (userAge >=30 && userAge<45 )  // if true then execute inside code 
    console.log("User age is in between 30 to 45")

console.log("program Ended !")

if(userAge <45 && userAge>1){
console.log("User is not retired  ")
}
else{
    console.log("User is retired")
}