const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')

const cardList = document.querySelectorAll('.card')

let count = 1




 addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

   
    // 1. To remove the card -> when created, one click listener is active to remove it. This way, each card has an event listener to remove itself.

    // newCard.addEventListener('click' , ()=>{
    //     newCard.remove()
    // })
    container.append(newCard)

})




// 2. another  way to remove

container.addEventListener('click' , (e)=>{

    // card is outside the container
    if(e.target != container){
        e.target.remove()
      console.log(e.target)

    }
   
})










