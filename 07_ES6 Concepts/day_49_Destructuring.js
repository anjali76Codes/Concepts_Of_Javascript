// Destructuring --> mainly used for the array and objects also for 
//the parameters

const fruits = ['Banana' , 'Peach' , 'Papaya' , 'Orange']

//longest method
// const fruit1 = fruits[0]
// const fruit2 = fruits[1]
// const fruit3 = fruits[2]
// const fruit4 = fruits[3]



// simplest method --> Destructuring in Array
// not an array it's a variable
const [fruit1 , fruit2 , fruit3 , fruit4] = fruits
console.log(fruit1, fruit2 , fruit3 , fruit4)



// if we want to access any particular elements of an array then we ca access like this : 
// here skip three elements and return third

const [,,,fruit] = fruits 

const {2: fruit_3} = fruits
console.log(fruit_3)




// Object declaration

const userDetails = {
    name : 'Anjali',
    age : 21,
    branch : 'Comps',
    address:{
        city : 'Mumbai', 
        pincode : 421305
    }

}


// Destructuring in Objects

// check the key and  if found then return its value or else undefined
const { name , age , branch} = userDetails
console.log(name , age , branch)





// not want to create any variable instead of this we  just want to get its value




const { name:username , age:user_age , branch: user_branch} = userDetails

console.log(username , user_age , user_branch)



// address variable is not created but city  variable is created 

const {address : {city} } = userDetails
console.log(city)       // Mumbai
// console.log(address)     // Error :  not defined 



// city and address both not created as a variable only city_name variable is created

const {address : {city : city_name} } = userDetails
console.log(city_name)



 //Destructuring in Parameters

function user ({name , age}){
    console.log(name , age)
}

user(userDetails)

// for the particular access 


function user1 ({address :{city}} ){
    console.log(city)
}
user1(userDetails)



function fruitArray ([fruit_1,,,fruit_2 , a ,b] ){
    console.log(fruit_1 , fruit_2 , a,b)  // fruit_2 --> undefined
}


fruitArray(fruits[2])   // fruit_1 - P and fruit_2 - a   and a - y , b - a

fruitArray(fruits)




