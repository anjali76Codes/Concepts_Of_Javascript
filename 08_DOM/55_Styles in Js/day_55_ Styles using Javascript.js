
// access the h1 tag element
const  h1 = document.querySelector('h1')

// access the p tag element
const paragraph = document.querySelector('p')


// giving the styles 
h1.style.color = 'magenta'
paragraph.style.fontStyle = 'bold'

const h3 = document.querySelector('h3')
h3.style.backgroundColor = 'orange'


const images = document.querySelectorAll('img')

// for(let i =0 ; i<images.length ; i++){
//     images[i].style.border = '5px solid cyan'
// }

images.forEach((image)=>{
    image.style.border = '5px solid cyan'
   
})

/*
if text-decoration : then add more property also
use text-decoration-line
*/


const paragraphs = document.querySelectorAll('p')

for(const para  of paragraphs){
    // para.style.color  = 'purple'
    // para.style.fontSize = '18px'
    // para.style.fontWeight = 'bold'
  

    para.className = 'paraClass' 
    
    // we can set the class like this also and give the class name
    para.setAttribute('class' , 'mainClass')

    para.classList.add('savan')
    para.classList.add('anjali')
    para.classList.remove('savan')

    // check given class name is present or not if not then add and return false
    para.classList.toggle('anjali')  
    // para.classList.remove('savan')

 
}



// using cssText we can write the style in the css format
// para.style.cssText = ` color: white;
// font-size: 18px;
// font-weight: bold;`

// class list



















