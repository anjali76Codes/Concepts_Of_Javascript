// multidimensional array - arrays inside the arrays

// creating the arrays inside the arrays
const nameNumberList = [
  ["Anjali", 98],
  ["Kashish", 78],
  ["Teena", 90],
];

// when we want to access the Outer array  elements
// first square bracket indicates the Outer array
console.log(nameNumberList[1]); // ['kashish',78]

//when we want to access the inner array elements
// second square bracket indicates the inner array
console.log(nameNumberList[1][0]); // Kashish



console.log(nameNumberList[0][0]); // Anjali


console.log(nameNumberList[2][5])  // undefined



const ticTacToe = [
  ["x", null, null],
  [null, null, "o"],
  ["o", null, "x"],
];

console.log(ticTacToe[0][0])  // x


console.log(ticTacToe[1][2]) // o


console.log(ticTacToe[2][1])  // null
