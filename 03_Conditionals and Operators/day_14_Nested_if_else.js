/*
Nested if-else statements in JavaScript make it easy to handle different situations by checking multiple conditions one after another 

Nested if-else
 here we can use  if else if -else statement inside if else if else statement or within the all 
 */
const userName = prompt("Enter your name");
const userAge = parseInt(prompt("Enter your Age"));
console.log(`The username is ${userName}`);
console.log(`THe age is ${userAge}`);


// when one conditional  statement is correct then nested conditional statements will execute 
// and when it  is false then it will skip all statements within it even if nested statements are correct
if (userAge <= 25 && userAge >= 18) {
  console.log(`${userName} is a college student`);
  if (userAge >= 4 && userAge <= 18) {
    console.log(`${userName} is a school student`);
  } else {
    console.log(`${userName} is not a school student`);
  }
} 
else if (userAge >= 4 && userAge <= 18) {
  console.log(`${userName} is a school student`);
  if(userAge> 0 || userAge<=4){
    console.log(`${userName} is `)
  }
  else if(username){
    console.log(`${username}`)
  }
  else{
    console.log("not match found")
  }
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
