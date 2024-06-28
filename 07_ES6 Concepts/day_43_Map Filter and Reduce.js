// const nameList = ["Anjali", "Smith", "Roy", "Aisha"];

// // Map -->  Create new  array not do in existing array and iterates n times (length of the array)

// const mapResult = nameList.map((names) => {
//   // console.log(nameList)
//   console.log(names);
//   return names.toUpperCase();
// });

// console.log(mapResult);

// // index
// const Result = nameList.map((names, index) => {
//   // console.log(nameList)
//   console.log(index + 1, names);
// });

// const filterResult = nameList.filter((names) => {
//   // console.log(nameList)
//   console.log(names);

//   // filter --> filter the elements based on true or false and insert in new array not  in existing

//   // return names.toUpperCase()    //  here this is a string which value is truthy hence  it filter the all elements into the new array

//   // return false  // then filterResult [] --> empty

//   // return names.length>=4
//   return names.includes("A");
// });

// console.log(filterResult);

const students = [
  {
    name: "Anjali",
    age: 20,
  },

  {
    name: "Aisha",
    age: 17,
  },

  {
    name: "Smart",
    age: 26,
  },

  {
    name: "Roy",
    age: 19,
  },

  {
    name: "Teena",
    age: 18,
  },
];


// const studentResult = students.filter((student)=>{
//     console.log(student)
//     console.log(student.age)
//     return student.age>=18
// }) . map((student)=>{
//     console.log(student)
//     return student.name
// })


// console.log(studentResult)

// Reduce

const arrayNumbers = [1, 3, 4, 1, 1, 3 ,3 ,3 ,1]


// reduce syntax  --> .reduce(accumulator , current , index)
// accumulator - assign initial value . If  function is not returning anything then accumulator - initial value  remaining undefined


const reduceResult = arrayNumbers.reduce((accumulator , current , i)=>{
    console.log(i , current)
   
    // console.log(accumulator , current )
    
    return accumulator+current

} , 10)    // here 10 - initial value

 console.log(reduceResult)  // 30

