/*
Switch statements in JavaScript offer concise, readable, and efficient code organization for executing different blocks of code based on various conditions.
 */

const dayNumber = 4;
switch (dayNumber) {
  case 1:
    console.log("Today is Sunday");
    break;
  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  case 4:
    console.log("Today is Wednesday");
    break;
  default:
    console.log("Enter the valid dayNumber");
}
console.log("Program Ended!");

const userName = "Anjali";
const userAge = 20;

switch (true) {
  case userAge <= 25 && userAge >= 18:
    console.log(`${userName} is a college student`);
    break;
  case userAge >= 4 && userAge <= 18:
    console.log(`${userName} is a school student`);
    break;
  case userAge >= 25 && userAge <= 60:
    console.log(`${userName} is a working professional`);
  default:
    console.log("Enter the valid age");
}

 /* here grade = 1 that not match with any of the cases so default code will execute
 switch case is check  with strict equality operators 
 if false value is passed in switch then also it  will work and check with cases if any of the  cases will matched then it execute. if match is not found then it will execute default statement 
 case sensitive also
 */
//  const grade = 1 
// const grade = false
const grade = 'a'
switch (grade.toUpperCase()) { 
  case "A":     // execute this
    console.log("This students score marks more than 80%");
    break;
  case false:  // will execute this
    console.log("This students score marks lies between 60-80%");
    break;
  case "C":
    console.log("This students score marks lies between 40-60%");
    break;
  default:
    console.log("This students are fail");
}
