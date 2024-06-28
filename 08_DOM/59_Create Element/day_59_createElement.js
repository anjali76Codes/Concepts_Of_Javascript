

const container = document.querySelector('.container')
// const image = document.querySelector('img')



// by accessing one image and using for loop here we are given the 100 images 
          
for(let i = 2; i<100 ; i++){
    const newImage = image.cloneNode()

    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    container.appendChild(newImage)

}



// 1. creation of the p tag element
const paragraph = document.createElement('p')




//  2. giving the innerText into the p element
paragraph.innerText = 'This is all  about the how we can create any element in javascript'


// 3. add class name
paragraph.classList.add('my-para')


// add id name
paragraph.id = 'myPara'



// 5. append  the p element into the body element
document.body.appendChild(paragraph)





// let suppose we don't  have  even one image also so we need to create one element then we can add more images

// 1. create element
// const firstImages = document.createElement('img')



// 2.append
// container.appendChild(firstImages)



// for loop for 100 images
// for(let i = 1; i<100 ; i++){
//     const newImage = firstImages.cloneNode()


//     //  3. innerContent
//     newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     container.appendChild(newImage)

// }



// adding 100 images with its number
const containers = document.querySelector('.img-container')
const images = document.querySelector('img')
const para = document.querySelector('p')






// for loop for 100 images
for(let i = 2; i<100 ; i++){


    // 1.clone
    const newImage = images.cloneNode()
    const newPara = para.cloneNode()


    //  2. innerContent
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`



    // 3. append
    newPara.innerText = `${i}`
    container.append(newImage , newPara)

}



// not an efficient way 
// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

