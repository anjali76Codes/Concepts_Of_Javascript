// if -else if - else
const userName = prompt("Enter your name");
const userAge = parseInt(prompt("Enter your Age"));
console.log(`The username is ${userName}`);
console.log(`THe age is ${userAge}`);

if (userAge <= 25 && userAge >= 18) {
  console.log(`The username is ${userName}`);
  console.log(`${userName} is a college student`);
} 
else if (userAge >= 4 && userAge <= 18) {
  console.log(`The username is ${userName}`);
  console.log(`${userName} is a school student`);
}
 else if (userAge >= 25 && userAge <= 60) {
  console.log(`The username is ${userName}`);
  console.log(`${userName} is a working professional`);
} 
else if (userAge >= 60 && userAge <= 100) {
  console.log(`The username is ${userName}`);
  console.log(`${userName} is a retired `);
} 
else {
  console.log("Enter the valid age");
}

//Instead of conditions if we are give the truthy and falsy value then if value is truthy it will execute the   code inside if statement
if (12) {
  // 12 - truthy value so print -Hello
  console.log("Hello");
}
if (0) {
  // 0 - falsy  skip this if statement
  console.log("Hey!");
} else {
  // and execute this else statement
  console.log("Hello");
}



// here if userName is empty string then it is becomes falsy so else statement will execute
if(userName){
    console.log(`Hello`)
}
else{
    console.log("World")
}

console.log("Program Ended !");
