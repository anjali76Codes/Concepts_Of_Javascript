const arraysList1 = ['Anjali','Sanjana',67 , 78 ,90]
const arraysList2 =arraysList1
arraysList2.push("Teena")  
arraysList2.push(90)
arraysList1.push(100)
 
 /* Above I am assign the arraysList1 in arraysList2 and also  only in arraysList2 push the two new data but this data also copy in the first arraysList1  
 because in memory address of both the arrays are same 
 so this is not a correct way to copy the array from one to another
 */
// console.log(arraysList2)
// console.log(arraysList1)

const array = []
Object.assign(array,arraysList2)  // 1st method
const arrayList  = [... arraysList1]  //2nd method to duplication
arrayList.push(60)
console.log(arrayList)  // update only in this 
console.log(arraysList1)

const arrays = [].concat [arraysList1]   // 3rd method
console.log(arrays)
/*
Similarly it happens with the objects also if we are trying to copy one object value in another object and  in any of the object when i am updating any value it will change in both the Object  

*/

const user1Info = {
    firstName : 'Anjali',
    lastName : 'Gupta',
    Age : 20

}

// const user2Info = user1Info 
// user2Info.firstName = "Teena"
// console.log(user1Info.firstName)
// console.log(user2Info.firstName)


//  way to assign the one object value in the another object
const userInfo = {}
Object.assign (userInfo,user1Info)   // 1* method


userInfo.Age = 19  // update only in this object 
// console.log(userInfo)
// console.log(user1Info)



// simplest way to copy  - Spread Operator
//  2* spread Operator - copy the entire value 
 const user3Info = {...user1Info}
console.log(user3Info)

const userDetails = {
    firstName : 'Anjali',
    lastName : 'Gupta',
    Age : 20 ,
    Address : {
        city : 'Mumbai',
        state : 'Maharashtra',
    },
    subject  : ['Physics', 'Cs', 'Maths']

}

// Shallow copy  -    stores the references of the objects to the original memory address
const Info = {}
Object. assign (Info , userDetails)
const Info1 = {... userDetails}

// when we change either the source or copy , the other object change too

console.log(Info) 
console.log(userDetails)

// for proper duplicating the value - Deep copy 
// Deep copy  - stores the copies of object's value