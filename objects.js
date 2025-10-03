// object literals 



const mySymbol = Symbol("key1")

const jsUser = {
    name: "Basant",
    age :"19",
    location : "Jaipur",
    email: "xyz@google.com",
    "company": "amazon",
    isLoggedIn: false,
    lastLoginActivity: ["Monday","Tuesday"],

    [mySymbol] : "randomKey"

}

console.log(jsUser.email)
console.log(jsUser["company"])
console.log(jsUser[mySymbol])

// key value update 

jsUser.age = "18"
console.log(jsUser)


//freeze
// Object.freeze(jsUser)
// jsUser.age = 22 

console.log(jsUser.age)



//adding function 

jsUser.greet = function(){
    console.log("Hello World!")
}



jsUser.greetTwo = function(){
    console.log(`Hello JavaScript,${this.email}`)
}


console.log(jsUser.greet())
console.log(jsUser.greetTwo())