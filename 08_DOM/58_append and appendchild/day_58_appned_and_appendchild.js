/*   script.js  -->

 if defer attribute is not present --> then  js file request and wait and after coming it will load and try to executes js code without loading the html file   - result -> null

 Defer attribute -->   js file send the request and executes the further html file code and after complete html execution load and execute the js file  

 async --> not consistent . when html file is execute their codes then if js will loaded fully  then it will execute first without completing the html file 

*/




// append -> add the element at the end of the written document


// using Js  appendChild method


// first get that element which you want to append 
const h1 = document.querySelector('h1')



// then access the in which you want to append 
const container = document.querySelector(".container")


// using appendChild () method --> now h1 tag will be inserted into the container
 // cut and paste 
container.appendChild(h1) 



// cloneNode () --> create another element (copy and paste)




// cloneNode --> by default normal clone --> ignore the written content
h1.cloneNode()
  // -->   <h1><h1/>


// it cloneNode(true)  -> deep clone (copy content also )
container.appendChild(h1.cloneNode(true)) 

// accessing the card 
const card = document.querySelector('.card')


container.appendChild(card)
//   -->   <div class="card">



// // append after cloning  here true indicate the deep clone 
container.appendChild(card.cloneNode(true))
// -->    <div class="card">



// // here normal clone  --> not copy the content means card div will create but empty
container.appendChild(card.cloneNode()) 




 const h1tag = document.querySelector('h1')
const containerTag = document.querySelector('.container')
const cards = document.querySelector('.card')



// // using loop clone the h1tag 100 times into the container 
for(let i = 0 ; i<100; i++){
    containerTag.appendChild(h1.cloneNode(true))
}

// // similarly for card also
for(let i = 0 ; i<100; i++){
    containerTag.appendChild(card.cloneNode())
}




//we can change the innerText also
const newCard = card.cloneNode()


 newCard.innerText = '2'
 containerTag.appendChild(newCard.cloneNode(true))


 for(let i = 2 ; i<100; i++){
    const newCard = card.cloneNode() 
    newCard.innerText = i
    containerTag.appendChild(newCard)

    }


    // creating a text node 
    const newText = document.createTextNode('Savan')


    
    container.appendChild(newText) 


    // append --> use to append more than one element at a time 
    //  more flexible than appendChild

    // append
    container.append('savan' , h1 , 'Anjali') 


    // appendChild  -> only add the newText (only one ) not next
    container.appendChild(newText , 'Anjali') 



    





