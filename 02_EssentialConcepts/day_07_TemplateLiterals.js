// Strings are indexed.
const userName = "My name is Anjali";

// by giving  indexing we can access any single character
console.log(userName[11]);

//String property  - length  - count how much characters are present
console.log(userName.length);

/*String methods - without argument
1.toLowercase()
2.toUppercase()
4.trim()
5.trimStart()
5.trimEnd()
*/
const myName = "Anjali";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

const message = "    Hi, I am Ok    ";
const finalMessage = "_____ yes !";
console.log(finalMessage); // not remove underscore
// trim() - remove the spaces only if we are use underscore in the place of space so it is not remove that

console.log(message.trim());
console.log(message.trimStart()); //  only remove spaces from start
console.log(message.trimEnd()); //  only remove spaces from end

/*String methods - with argument
1.includes()
2.indexof()
3.charAt()
4.replace()
5.replaceAll()
6.concat()
7.padStart()
8.padEnd()
9.charCodeAt()
10.split()
*/
const title = "Black Heaven";
// includes()- check for exact match-> passing argument value is present in the string or not  and also check that cases should also be match if yes - it gives true otherwise - false
console.log(title.includes("A")); // result - false

console.log(title.indexOf("a")); // return - 2  only return one value - which first found
// if passing character is not found in the string then  it return -1

console.log(title.replace("a", "A")); // replace () - change only one  character which  will come first

// to change all characters of passing character - use replaceAll()
console.log(title.replaceAll("a", "A"));

console.log(myName.concat(".", title)); // concat the strings
console.log(myName.concat(",", " ", "This is my bookTitle ", ",", title, ".")); // we can add multiple strings or characters

const lastDigits = "4567";
console.log(lastDigits.padStart(16, "*"));

// add from End
const myNum = "12564";
console.log(myNum.padEnd(10, "."));

const name = "Anjali";
console.log(name.charAt(3)); // return - a

// charCodeAt - gives ascii code of the character
console.log(name.charCodeAt(4)); // return ascii code of l - 108

// split  - split our string into the array format
const text = "This is a text";
console.log(text.split()); // result - [ 'This is a text' ]
console.log(text.split(" ")); // result - [ 'This', 'is', 'a', 'text' ] split all word when space is found

//Template literals
const amount = 45670;
console.log(`The amount is ${amount}`);
console.log(`The amount is $amount`); //not return it's value print as it is
console.log(`The amount is $${amount}`); // print - The amount is $45670
console.log(`The amount is Rs.${amount}`); // The amount is Rs.45670
