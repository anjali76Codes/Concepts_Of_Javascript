// access the all paragraphs

const paragraphs = document.querySelectorAll('p')


 // select the p element and set the class name textPara
const para = document.querySelector('p').className = 'textPara'


const paragraph = document.querySelector('p')
   // result -> undefined
 
 
   paragraph   -->  //<p class="textPara">


 paragraph.parentElement   //-> { <div class="mainClass"> }



 paragraph.parentElement.parentElement  //-> <body>



 paragraph.parentElement.parentElement.parentElement // -> { <html lang="en"> }



 paragraph.parentElement.parentElement.parentElement .parentElement   // -> null


 paragraph.parentElement.parentElement.parentElement.parentElement.parentNode    // --> #document


 paragraph.childNodes  //-->   NodeList(5) [ #text, br, #text, b, #text ]


 paragraph.children  // ->  HTMLCollection { 0: br, 1: b, length: 2 }


paragraph.parentElement.parentElement.children
// -> HTMLCollection { 0: div.mainClass, 1: footer, 2: script, 3: script, length: 4 }


// Sibling -> 1. previous   2. next
// if we want to access the sibling of next to next then can't access directly nextnextElementSibling -> invalid

// here We can access the previous and next siblings like this ::

paragraph.previousElementSibling
// -->  <h2 class="heading2">



paragraph.nextElementSibling
         // -->    <p class="textPara">



/* *note ::
nextElementSibling  -> return next element ignore the node

nextSibling   -> return the next node ignore the element
*/

paragraph.nextSibling  
// -->      #text "\n\n   "

