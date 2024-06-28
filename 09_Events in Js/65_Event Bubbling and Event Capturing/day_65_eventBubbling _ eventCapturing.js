const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')



// Capture phase (capture: true) --> reverse the propagation (outer to inner)
// Event bubbling --> propagate from inner to outer



window.addEventListener('click', () => {
    console.log('6. Window clicked')
}, { capture: true })




// Clickable only for parent and its children (inside)
green.addEventListener('click', () => {
    console.log('3. Green clicked')
}, { capture: true })




// To stop propagation and block the event
blue.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('1. Blue clicked')
}, { capture: true })




pink.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('2. Pink clicked')
}, { capture: true })





document.addEventListener('click', () => {
    console.log('5. Document clicked')
}, { capture: true })




document.body.addEventListener('click', () => {
    console.log('4. Body clicked')
}, { capture: true })



// once: true --> click only once

// blue.addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log('1. Blue clicked')
// }, { once: true })
