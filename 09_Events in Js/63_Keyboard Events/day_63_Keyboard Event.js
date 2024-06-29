/* Keyboard Events 
 Three types ::

 1. Key up
 2.key down
 3.key press
*/


// * note :: keyboard events only works when focus event are present on the particular element


// 1.key up

const h1 = document.querySelector('h1')
const input = document.querySelector('#inputText')


// here to do focus event on h1 tag we can use tabindex = 0 in html
// h1.addEventListener('keyup' , (e)=>{
//   console.log(e)
//   console.log('keyup event on h1')
// })



// input.addEventListener('keyup' , (e)=>{
//     console.log(e)
//     console.log('keyup event on input')

//     /* key code -->  defines which button is pressed. give code with key+value(keyA)   and always give  value in uppercase

//     key --> return actual value 
//      if capsLock -> off then  value always in small
//      if capsLock --> on then value is always in capital


//      */
//     console.log('Code :' , e.code)
//     console.log('Value :' , e.key)
// })

// * note : keyCode will not change 
// key value would be change




// keypress
// alt , shift , capsLock  , ctrl , Arrows etc.will not work in this
// input.addEventListener('keypress' , (e)=>{
//     console.log(e)

//     console.log('Code :' , e.code)
//     console.log('Value :' , e.key)
// })



// keydown  --> similar to keypress but also work on all keys
input.addEventListener('keydown' , (e)=>{
    console.log(e)

    console.log('Code :' , e.code)
    console.log('Value :' , e.key)
})

