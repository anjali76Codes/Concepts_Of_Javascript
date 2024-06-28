// Methods and Functions
// Every function is a method but not every method is a function

const maths = {
    E: 2.7182817,
    add : function (a,b){
  return a+b    // return sum
                     // if i am using here console return undefined 
    } ,

    Square : function(num)
    {
        return num* num
    } ,

// another method  in new Js version
Subtract(a , b){
    return a-b
} ,

cube (x)
{
   return x*x*x 
}

}

    console.log(maths.add(10,5))
    console.log(maths.Square(15))
    console.log(maths.Subtract(10 , 6))
    console.log(maths.cube(3))