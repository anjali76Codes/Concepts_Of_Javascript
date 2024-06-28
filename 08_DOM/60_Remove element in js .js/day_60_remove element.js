let container = document.querySelector('.container')
const images = document.querySelector('img')
const para = document.querySelector('p')



//for loop for 100 images
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

// * remove child
img4.parentElement.removeChild(img4)



// * remove ()
// accessing the image3  
 let  img4 = document.querySelector('.container').childNodes[4]


// remove the img3 
// img3.remove()


// remove the container --> not remove permanently 
container.remove()

// to get back  the container we can append back
document.body.append(container)

// to remove the element

// to remove permanently  assign null
// but for this we have to declare variable by using let not const

// container = null    //--> free from memory


// * note ::

// The differences between removeChild and remove:
// removeChild:
//  Requires the parent node to be specified.
//  Returns the removed node.
//  Usage: parentNode.removeChild(childNode);



// remove:
//  Called directly on the element to be removed.
//  Does not return the removed node.
//  Usage: element.remove();




 


