const name = document.querySelector('.name')
const inputText = document.querySelector('#textName')

const age = document.querySelector('.age')
const inputAge = document.querySelector('#textAge')



// name.innerText = localStorage.myName
name.innerText = localStorage.getItem('myName')

inputText.addEventListener('input' , (e)=>{
    // console.log(e.target.value)
// localStorage.myName = e.target.value
localStorage.setItem('myName' , e.target.value)
name.innerText = localStorage.getItem('myName')

    
})


age.innerText = localStorage.getItem('myAge')

inputAge.addEventListener('input' , (e)=>{
//     console.log(e.target.value)
// localStorage.myName = e.target.value
localStorage.setItem('myAge' , e.target.value)
age.innerText = localStorage.getItem('myAge')

    
})




const myData = JSON.parse(localStorage.getItem('myData')) || {}

if (myData.name) {
  nameElement.innerText = myData.name
}

if (myData.age) {
  ageElement.innerText = myData.age
}

inputText.addEventListener('input', (e) => {
  myData.name = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  name.innerText = e.target.value
})

inputAge.addEventListener('input', (e) => {
  myData.age = e.target.value
  localStorage.setItem('myData', JSON.stringify(myData))
  age.innerText = e.target.value
})