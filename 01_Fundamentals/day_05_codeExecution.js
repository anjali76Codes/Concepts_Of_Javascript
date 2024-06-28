let a = 30
var name = " Anjali"
const myDetails = "xyz"

console.log(name)
let age = 20
var num = 10

/*
let see these 6 lines of codes how this code execute
How actually code executions are happen ?
1.Memory creation phase
js first start to search for let , var ,const if any found then creates memory first and inside that put undefined value at start

As we can see above at start 3 lines having let,var ,const so allocates three memory  or  created memory
next console.log(name )--> js ignores this and search for let , var ,const

so creates two more memory  for let and var as in code it is given 
*/

/*
2.Code Execution phase
in this phase in the place of undefined value its actual value will be inserted

Debugger--> break point if debugger is active then it stop everything at that point and further part will not be proceed(but it will work when devtools(inspect) is open)


instead of doing there(devtools) we can add debugger in js code --> same working as above 

so to avoid this we can use --> defer 
it send js code to the server and after fully execution of  html code then it executes js code  

*/