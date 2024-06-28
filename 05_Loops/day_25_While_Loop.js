let num = 1

while(num<=100){
    console.log(num)
    num++
}


// if condition is false then exit the loop and execute next line of the code
console.log("Program Ended")

let friendsGroup = ['Anjali', 'Teena', 'Sanjana', 'Kashish' , 'Aisha', 'Avni']

let i = 0
while (i <friendsGroup.length){
  
    friendsGroup[i] = friendsGroup[i]  + ' Procoder'
    console.log( `${i+1} . ${friendsGroup[i]}`)

    i++
}