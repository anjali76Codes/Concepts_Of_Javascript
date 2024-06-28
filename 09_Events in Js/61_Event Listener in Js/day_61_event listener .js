// Event listener  --> JavaScript’s event listener function allows us to create custom responses to events like mouse clicks, keyboard clicks, and window resizing. The programming paradigm of waiting and responding to real-time events is called event handling.



function add(a,b){ 
    // console.log(a+b)
    return a+b
}


// If we are using onclick or ondblclick in HTML, by default it creates its own function and whatever we pass in this function is executed as a line of code.



// 3rd method for event listener

const h1 = document.querySelector('h1')
// h1.onclick = add(10,5)     // 15




// here first  function event override by the second function
h1.onclick = sayHi()

// only take  this one
h1.onclick = secondHi()







// most used  method for event listener
// because using this we can  occurs the event as much we want


function sayHi(){
console.log('Hii !!')
}



function secondHi(){
    console.log('Second hii')
}


h1.addEventListener('click' , sayHi() )
h1.addEventListener('click' , secondHi() )



const card = document.querySelector('.card')

card.addEventListener('click' , function (){
    console.log('This is card container')
    
})




const container = document.querySelector('.container')
const addCard = document.querySelector('.add-card')

// by using clone
card.addEventListener('click' , function (){

    // 1.clone
const newCard = card.cloneNode()


//2 .appendChild
container.appendChild(newCard)



// newCard.innerText = '2'

})





// by  using createElement

let count = 1
card.addEventListener('click' , ()=>{
    
// 1 . createElement
    const newCard = document.createElement('div')


    // 2. className 
    newCard.classList.add('card')


    newCard.innerText = count
    count++

    // 3. append 
    container.appendChild(newCard)

})


