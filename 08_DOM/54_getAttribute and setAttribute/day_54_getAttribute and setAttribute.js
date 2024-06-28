//  Attributes --> it can be anything which provides the property of the element 
// In Js there are multiples attributes thats are predefined and it can be userDefined also 



const attributes = document.querySelector('[boldTag]').attributes.boldTag.value
console.log(attributes).attributes.boldTag.value



// this is another and easiest method
// using getAttribute --> we can directly access the attribute value
const attributes1 = document.querySelector('[boldTag]').getAttribute('boldTag')  // textBold

console.log(attributes1)



// if attribute is not found then return null
// const attributes2 = document.querySelector('[hello]').getAttribute('hello')

//  accessing by using tag  and its class attributes

const attributes2 = document.querySelector('h1').getAttribute('class')
console.log(attributes2)


// access the tag element
document.querySelector('h2')


// using  the getAttribute  we can access the class value
document.querySelector('h2').getAttribute('class')



// setAttribute --> we can set the attributes
// syntax -> setAttribute('attributeName'  , 'value')

document.querySelector('h1')

document.querySelector('h1').setAttribute("title" , "Anjali's Websites")

// set the id  manually and giving styling to this we can do changes
document.querySelector('h1').setAttribute(
    'id', 'heading')

    // in Js  we can directly set the common  predefined attributes  values because they are available as a properties

    /* common attributes like :
    1.id
    2.className
    3.title
    4.href etc.
    */

    document.querySelector('h1').id

    // set the is value
    document.querySelector('h1').id = 'heading'


// here  class attribute is available in the name of a className property 
    document.querySelector('h2').className = ' class heading'

 