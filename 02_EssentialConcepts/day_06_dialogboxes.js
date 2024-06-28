/*
#Dialog Boxes
Three types of the dialog boxes
1.alert
2.confirm
3.Prompt
1. alert -> alert we are using to show some kind of message or alert to the user 
whatever alert msg is given until user not press or click on OK further code will not be execute 
*/
// alert -->  undefined type
alert("Are you sure ?")

// after running this we get only one button -> OK
// and after click on the OK we get value - undefined




//2.confirm -->boolean type
  const isConfirmed = confirm("Would you like to proceed?")
  console.log(isConfirmed)

/*
here after running this we get two options -> OK and Cancel
if click on OK - value is true
if click on Cancel - value is false
*/

//3.prompt -  we can use for userInput
const userInput = prompt("Enter your name")
console.log(userInput)

/*
in prompt - two buttons  --> OK and Cancel
after entering userInput if we click on Ok then it return that userInput value 
if click - Cancel --> return null 

*Note - In different tab value is different 
*/




