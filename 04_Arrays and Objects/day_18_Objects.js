// Total 8 types of data types Primitive - 7 and Non-Primitive - 1
// There is only  one type  NON PRIMITIVE  date type  that is called Object.
// Primitive - value type 
// Non -Primitive - Reference type
// Objects are divided into three categories :
// * Objects Literals
// * Arrays
// * Functions

const user1 = {
  firstName: "Anjali",
  lastName: "Gupta",
  Age: 20,
  education: "SY",
  city: "Mumbai",
};


const user2 = {
    firstName: "Anjali",
    lastName: "Gupta",
    Age: 20,
    education: "SY",
    city: "Mumbai",
  };
  


  // it stores this data in two different address space even all values are the same in user and user2

  // Objects is referenced type so it will work on address not its values so here it's return false

  console.log(user1=== user2)  // false



  // here  empty string  having fixed address space @77
  const userName1 = ''
   const userName2 = ''

// but empty objects - creates different address space
   const Name1 = {}
   const Name2 = {}

   const myName = {
    Name : 'Anjali',
    Age : 20,
    city :'Mumbai'

   }

   // * two ways to access the values 
   //1.

   console.log(myName.Name)  // Anjali

   //2.
   // by default In Objects keys are string hence we can access the values by this method also
   console.log(myName['Name'])   // Anjali

     // when we want to give this type of keys naming then we can't access the values by the 1st method so we need to use this method to access the particular values of the object
     const city = 'Mumbai'  // variable
     const user_Name = {
      'first-Name' : 'Anjali', 
      'Last - Name': 'Gupta',
      Mumbai : 'My city'
   }
  //  console.log(user_Name.Last-Name)  // Invalid give error
   console.log(user_Name['Last - Name'])  //Gupta


   // As we can see here i am trying to access the city(key) : value but city key is not present in this object so whenever this type of situation is occur it will always give us undefined
console.log(user_Name.city)  // undefined

// for variable  - city is replace the Mumbai value
console.log(user_Name[city])       //My city

console.log(user_Name["first"+"-Name"]) // will combine and return the firstName - Anjali

user_Name.age = 20
user_Name["isStudent"] = true
console.log(user_Name)    // user_Name


const user_Name1 = {
 'first-Name' : 'Anjali', 
 'Last - Name': 'Gupta',
 Age : 20,
 address:{
  city : "Mumbai",
  pincode : 421305,
  state : 'Maharashtra',

  moreDetails : {
    population : 54776587697,
    area : '899 sq km'
  }

 }
}


console.log(user_Name1)
user_Name1.address.moreDetails.weather = 'Nice'
console.log(user_Name1.address.moreDetails.weather)


