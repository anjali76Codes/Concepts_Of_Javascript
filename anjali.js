

const userDetails = {
    name : 'Anjali',
    age : 21,
    branch : 'Comps',
    address:{
        city : 'Mumbai', 
        pincode : 421305
    }

}


const { name:username , age:user_age , branch: user_branch} = userDetails

console.log(username , user_age , user_branch)