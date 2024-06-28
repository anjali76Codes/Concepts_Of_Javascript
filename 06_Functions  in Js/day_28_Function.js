

// function definitions
function introduceMe (username){   // parameter
console.log(`Hi ${username  || 'Procoder'}`)
console.log(`My name is ${username || 'Procoder'} `)  // if no argument is passed then print Procoder 
console.log(`${username  || 'Procoder'} is a web developer`)
}


// function call
introduceMe("Anjali")   //  passing arguments
introduceMe("Teena")
introduceMe()  


function introduceMe1 (username = "Procoder"){   // default parameter introduced in 2015
    console.log(`Hi ${username}`)
    console.log(`My name is ${username}`)
    console.log(`${username} is a web developer`)
    }
   // Here, I am not passing any arguments, but I initialize the string in the parameter, so it prints the default value.
     introduceMe1(); // Return in place of username procoder.


   function introduceMe2 (username, profession , age){   // parameter
    console.log(`Hi ${username}`)
    console.log(`My name is ${username} and by profession I am   ${profession}`)  // if no argument is passed then print Procoder 
    console.log(`${username} is a web developer`)
    console.log(`${username} is ${age} years old`)

    console.log(typeof(username))
    console.log(typeof(profession))
    console.log(typeof(age))
    }

    introduceMe2("Anjali", "Software developer" , 24)
    introduceMe2("Teena" , "Computer engineer" , 26)


