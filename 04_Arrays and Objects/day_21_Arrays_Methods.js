/**
 Arrays Methods
 push()
 pop()
 shift()
 unshift()
 includes()
 concat()
 indexOf()
 reverse()
 sort()
 split()
 splice()
 */

const arrayNumbers = [1,2,3,4,5,6]
console.log(arrayNumbers)

//push - add at end
arrayNumbers[arrayNumbers.push(3)]
console.log(arrayNumbers)


// pop - delete from end
arrayNumbers.pop()
console.log(arrayNumbers)


// shift - delete from start
arrayNumbers.shift()
console.log(arrayNumbers)


// unshift -  add at start
arrayNumbers[arrayNumbers.unshift(4)]
console.log(arrayNumbers)


const animalsGroup = ['Dog','Cat','Fox','Giraffe','Horse','Lion']
const Names = ['Anjali',53]


// concat -  add arrayNumbers into the animalGroup
animalsGroup.concat(arrayNumbers)
console.log(animalsGroup)


// add animalsGroup into the arrayNumbers
const res2 = arrayNumbers.concat(animalsGroup,Names)
console.log(res2)


//  indexOf - return elements  based on  its index
const res3 = animalsGroup.indexOf(3)
console.log(res3)

animalsGroup.indexOf('fox')  // 2
animalsGroup.indexOf('Fox')  // here  return -1 because it is also check cases(upper and lower)


// includes - check weather the element is present or not based on that return true or false

const res4 = animalsGroup.includes('Giraffe')  // true
console.log(res4)
animalsGroup.includes('giraffe')  // return false  check strict equality


// reverse - reverse the elements
 const reverseResult = animalsGroup.reverse()
 console.log(reverseResult)   


 // sort - sort the array in order
 const sortResult1 = animalsGroup.sort()
 console.log(sortResult1)

 const numbers = [2,34,56,12,15,23,0,20]
 const sortResult2 = numbers.sort()  // 0,12,15,2,23,34,56
 console.log(sortResult2)


 //slice(start,end) - do changes into the existing array
 const sliceResult = animalsGroup.slice('Dog','Lion')  

 // here include the start but exclude the end value
 const result1 = animalsGroup.slice(2,4)
console.log(result1)

 // splice(start, till(no.)) - create new array with the result 
 const spliceResult = animalsGroup.splice(2,3)  //
 console.log(spliceResult)    // Fox, Giraffe, Horse

 