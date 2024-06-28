const arrayNum1 = [1, 3,4, 6,7]
const arrayNum2  = [1 ,7,8,3,2,2]

// const joinedArray = arrayNum1.concat(arrayNum2)
 const joinedArray = [...arrayNum1 , ...arrayNum2 , 5 ,"Anjali" , 12]
 console.log(joinedArray)

const user  = {
    name : 'Anjali',
    age : 21 ,
    branch : 'Comps'
}

// add all 
const userUpdate = {...user , city : 'Mumbai' , Contact : 3485643584}
console.log(userUpdate)

function add (){
    let sum = 0 
    for(let i =0 ; i <arguments.length ; i++){
        sum+=arguments[i]
        console.log(sum)
    }
    return sum
}

add(5,7,8,6,3,2,1)
add(...joinedArray)