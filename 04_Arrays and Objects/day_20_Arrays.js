// Arrays - collections of data
// typeof Arrays - object

// elements  that are stored  having unique index number start from 0 
const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Dates",
  53,
  null,
  undefined,
  {},
  true,
  false,
];


const fruitsCollection = [ "Apple","Banana","Orange","Dates"]

console.log(fruitsCollection)


// to add the more data  into existing array 
// Here Orange at index 2 is replaced by the Strawberry 
fruitsCollection[2] = "Strawberry"
console.log(fruitsCollection)

// for accessing the data of an arrays elements
console.log(fruitsCollection[3])  // Dates

// If we  are trying to access the elements that is not present in an array then it return undefined 
console.log(fruitsCollection.length)  //4
console.log(fruitsCollection[10])   // undefined

fruitsCollection[12] = "Papaya"
console.log(fruitsCollection)
console.log(fruitsCollection[12])  // from index 4 to 11 i.e 8 empty items it is empty and in index of 12 it add the Papaya 

console.log(fruitsCollection.length) //13


// to add the elements at the end 
fruitsCollection[fruitsCollection.length] = "Cherry"
console.log(fruitsCollection)

// Instead of doing like this we can directly use a method called push() - add element at the end of the array
fruitsCollection[fruitsCollection.push()] = "Coconut"
console.log(fruitsCollection)
// at a time multiple elements we can insert in the array

fruitsCollection[fruitsCollection.push('Tomato', 5 , null , undefined )]
console.log(fruitsCollection) 

console.log(fruitsCollection[fruitsCollection.pop()])   // elements removed from the end 

console.log(fruitsCollection)
const array1 = [1,2,3,5]
const array2 = [1,2,3,5]
console.log(array1===array2)   //  return - false because addresses are the different 
 

