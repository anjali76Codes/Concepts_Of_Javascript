// Object .freeze Vs Object.seal

const user_Name = {
    firstName : 'Anjali', 
    lastName: 'Gupta',
    Age : 20,
    address:{
     city : "Mumbai",
     pincode : 421305,
     state : 'Maharashtra',
   
     moreDetails : {
       population : 54776587697,
       area : '899 sq km'
     }
   
    },
    age : 20,
    isGraduate :true
   }
   console.log(user_Name)     


   // for deleting the data from the object we use delete

   delete user_Name.firstName  // true
   console.log(user_Name)    

   // Object .seal()
   //  Used To prevent the adding and deleting the data in the object

   Object.seal(user_Name)
   

   // here if I am trying to add some data or deleting the data it return false not possible
  console.log( delete user_Name.LastName )    // false

   console.log(user_Name)
   user_Name.age = 22
   console.log(user_Name)  // update the age value

// by using Object.seal we are prevent the adding and deleting but here we can modify the values or  can change . Hence Object.freeze is more powerful than this 



   // Object.seal() Vs Object.freeze()  - Object.freeze is  also used to prevent the adding and deleting the data in the object + it don't allow to change any existing values that's why it is more powerful than Object.seal() for prevention.
   
   Object.freeze(user_Name)
   user_Name.LastName = 'Shahu'
   console.log(user_Name)    // don't allow to any change so it remains same


   //In object one Keyword - in
   // used to check searching key is present or not in the object
   'lastName' in user_Name
   console.log('lastName' in user_Name)   // true
   console.log('mobileNumber' in user_Name)   //false

   