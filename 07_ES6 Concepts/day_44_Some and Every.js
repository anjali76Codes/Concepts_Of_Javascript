const array = [ 1 , 2, 3, 4 , 5 , 6]


/* some --> check all elements in an array when it is found true at any index then exit the loop and return true else false
 1.if found false then check for next one until last if not get any true then return false
 2 . If found true at any index then exit the loop and return true
*/

const someResult = array.some((num)=>{
    console.log(num)
    // return num >=2   // true
    return num >=10   // false
})
console.log(someResult)


/* Every --> Opposite to the Some 
 1.if found true then check for next one until last if not get any false then return true
 2 . If found false at any index then exit the loop and return false
 */



console.log(array)

const everyResult = array.every((num , i)=>{
    console.log(num , i)
    return num >= 3   // at index 1 it is found false then exit and return -> false
})

console.log(everyResult)



const numbers = [2, 4 ,  6, 8 , 10]
const everyResults = numbers.every((num , i)=>{
    console.log(num , i)
    // if(num %2 ===0){
    //     console.log(num)
    // }
    return num%2===0   
})
console.log(everyResults)

