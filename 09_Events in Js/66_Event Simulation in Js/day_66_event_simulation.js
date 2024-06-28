const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form = document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})






// Event simulation -> By default, there is always a click event, so we can add or fire the event using a click event like this:
addCardBtn.click()

// To fire the event 1000 times, use a loop
for(let i = 0; i < 1000; i++) {
  addCardBtn.click()
}





// Add a card at certain intervals
// The loop continues indefinitely
// To stop this, we can use clearInterval by using its ID

const intervalID = setInterval(() => {
  if(count > 10) {
    clearInterval(intervalID)
  }

  addCardBtn.click()

}, 100)





// Use setTimeout to focus and blur the input

input.focus()  // When written in JS, this works. If written in the console, it may not work.



setTimeout(() => {
  input.focus()
  console.log('Focus event')
}, 1000)



setTimeout(() => {
  input.blur()
  console.log('Blur event')
}, 3000)



// Form submit
form.submit()




setTimeout(() => {
  form.submit()
  console.log('Form submitted')
}, 2000)




// Form reset
form.reset()




setTimeout(() => {
  form.reset()
  console.log('Form reset')
}, 3000)



