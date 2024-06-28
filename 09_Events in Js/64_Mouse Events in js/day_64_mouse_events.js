const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

card.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// mouseup event --> on click, add card
card.addEventListener('mouseup', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// mouseenter event --> when the mouse enters the zone without clicking, add card. If we try by clicking, it will not work.
card.addEventListener('mouseenter', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

h1.addEventListener('mouseenter', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// mouseleave event --> opposite to mouseenter
card.addEventListener('mouseleave', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// mousemove event --> when the mouse moves, add card
card.addEventListener('mousemove', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// mouseout event --> when the mouse enters and then leaves the zone, add card
card.addEventListener('mouseout', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// mouseover event --> similar to mouseenter, but it also works for child elements inside the main element
card.addEventListener('mouseover', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// wheel event --> when scrolling using the touchpad or mouse, add card
card.addEventListener('wheel', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// scroll event --> when scrolling occurs, add card
document.addEventListener('scroll', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// touchstart event (not a mouse event) --> works on mobile only
card.addEventListener('touchstart', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// touchend event --> when the touch ends, add card
card.addEventListener('touchend', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// touchmove event --> on mobile devices only
card.addEventListener('touchmove', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// drag event --> first make the element draggable, then add card on drag
h1.addEventListener('drag', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// event that works on both mobile and desktop
card.addEventListener('pointermove', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})






// pointerenter event --> when the pointer enters the zone, add card
card.addEventListener('pointerenter', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})





// pointerleave event --> opposite to pointerenter
card.addEventListener('pointerleave', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)   
})
