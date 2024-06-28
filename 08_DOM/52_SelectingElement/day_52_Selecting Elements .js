// want to access image child
// if inside one child there is more children exists then it's very difficult or vast method to access deepest child so instead of this Document object having some methods so that we can easily get or access the required children 
const imagesSource = document.body.children[0].children[2]



// all collections of the images
document.images


// Document methods for accessing 
//*  getElementsByTagName

// gives all h1 tag
document.getElementsByTagName('h1')  

// using index we can access particular Element directly
document.getElementsByTagName('h1')[0]

// content inside the Element
document.getElementsByTagName('h1')[0].innerHTML

// if tag are not found then return empty html[]
document.getElementsByTagName('h2')



//  *getElementsByClassName

// return all collections which are having className - mainClass
document.getElementsByClassName('mainClass')

document.getElementsByClassName('mainClass')[1]



// * getElementById --> select only  one element at a time if there is two elements having same id then it consider first element only not check further so better is should all elements having unique id
// if id is not found return null 
document.getElementById('image')

document.getElementById('img-src')

// * querySelector  -->   we can pass anything it can be className or idName or tag it take first only and return 
// for className ->use .         and for idName -> use #
document.querySelector('.mainClass')   // div
document.querySelector('#img-src')


// * querySelectorAll --> get all collections and return in Nodelist form so that use of Array method can be possible
document.querySelectorAll('.mainClass')  // div and p 

// it will give all  element collections even more than one id elements have
document.querySelector('#img-src')


// Attribute selector --> written in [] and we can select and style this

// Update  images Url


const imagesUrl = [
    'https://i.pinimg.com/564x/d1/de/90/d1de908b995de8859648f62ccafe50fc.jpg', 
    'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
]


// doing like this we can use here loop  to change all the images
// allImages[0].src = imageUrl[0]
// allImages[1].src = imageUrl[1]

// for(let i =0 ; i<allImages.length; i++){
//     allImages[i].src = imagesUrl[i]
// }


// using for each loop

allImages.forEach((image , i)=> {
    image.src = imagesUrl[i]
});




