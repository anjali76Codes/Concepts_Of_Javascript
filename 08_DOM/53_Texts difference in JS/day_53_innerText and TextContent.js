// console.dir(document)

const paragraph = document.querySelector('p')
console.log(paragraph.innerHTML)


// give its html
paragraph.innerHTML


// innerText --> avoid all gaps and tags just only give the text in simple format
paragraph.innerText


// where as textContent return the content as written in the code like ensure the gaps and new line and all just avoids tags only

paragraph.textContent

/*  * note :
 innerText :    in style .css if I am doing some part as display : none then  its not display that part 
 in short -> innerText only display that content which are display on the browser or  window screen


 display : none  --> does effect 
 opacity : 0 --> no effect
 visibility : hidden  --> will effect
textContent : whereas textContent are display
 display -> written as in the code

display : none  --> no effect 
 opacity : 0 --> no effect
 visibility : hidden  --> no effect


 */