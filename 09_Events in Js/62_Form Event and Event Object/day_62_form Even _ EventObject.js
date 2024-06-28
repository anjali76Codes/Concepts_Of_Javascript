// Form event

const input = document.querySelector("#username");
const paragraph = document.querySelector("p");
const form = document.querySelector("from");



// click
input.addEventListener('click' , ()=>{
    console.log('clicked')
})

// dblclick
input.addEventListener('dblclick' , ()=>{
    console.log('double clicked')
})





// event object  --> here (e) function call the event Listener function and pass the value

// Input Event --> when we give input, it updates immediately as input is given

input.addEventListener('input' , (e)=>{
    // console.log(e)
   console.log(e.type)

    console.log(e.target.value)
    paragraph.innerText = e.target.value
    // console.log('input event fired')
})



// Change Event --> when we change input value and click outside of the input text area, it will update its value


input.addEventListener('change' , (e)=>{
    // console.log(e)
   console.log(e.type)

    console.log(e.target.value)
    paragraph.innerText = e.target.value
    console.log('input event fired')
})






// focus event  --> focus and blur both in this event but the type is different



// focus --> inside click
// blur  -> outside click
input.addEventListener('blur', (e) => {
  // console.log(e)
  console.log(e.type);
  console.log(e.target.value);
  paragraph.innerText = e.target.value;
  console.log('input event fired')
});




// form --> acts like an anchor tag
// redirect the another page

// in the url --> get action ? name





// submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e);

  const myFormData = new FormData(form)
  console.log(myFormData)

// take all entries of  the form
  for(const p of myFormData.entries()){
   console.log(p)
  }
});



// button type 
// 1. button   2. submit (by default)    3. reset


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    console.log('Form submitted')

})




form.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target)
    // console.log('Form clicked')

})