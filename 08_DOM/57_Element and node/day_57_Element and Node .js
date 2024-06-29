
document.body.children
// -->    HTMLCollection { 0: div, 1: script, 2: script, length: 3 }



typeof(document.body.children)
//  -> "object" 





document.body.childNodes

//  -> NodeList(9) [ #text, div, #text, script, #text, <!--  Code injected by live-server  -->, #text, script, #text ]




document.body.childNodes[2]
//   -> #text "\n    node type -3 


document.body.childNodes[5]
// <!--  Code injected by live-server  --> node type - 8


// after accessing we can update its value like this ::

document.body.childNodes[6]

  //  -->    #text "\n"

 document.body.childNodes[6].nodeValue
// " "



 document.body.childNodes[6].nodeValue  = 'Hey Anjali !!!'
 //  -->    "Hey Anjali !!!" 



// note ::  All elements are the nodes  but  not all nodes are  the elements
 


