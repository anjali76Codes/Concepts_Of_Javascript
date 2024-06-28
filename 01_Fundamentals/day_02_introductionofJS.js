// REPL - Read Evaluate Print Loop
console.log("Hello Anjali")
console.log(5+6)

/*
why we need defer ?
we can add script.js in two Ways:
1.inside head tag
2.inside the body tag
 instead of  adding inside the body tag   we have to add script.js inside the head tag  cause it is more beneficial than that 
*/

/*
*Defer -->
when we add script.js inside --> head tag 
then  it is first load and  then execute the the js whole code and after complete execution then it loads the further written code content -->html code so this is not valid  we don't want this so to avoid this we need defer 
so if we are use defer so js part goes to the server and further html code will load and after fully  load then js will execute 
*/
