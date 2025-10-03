setUsername = function (username){
    this.username = username
}

function createUser (username,password){

    setUsername.call(this , username)
    this.password = password
}


const user1 = new createUser('user1','1234')
const user2 = new createUser('user2','5678')

console.log(user1)
console.log(user2)



// In JavaScript, the call() method is a built-in function of all JavaScript functions that allows invoking a function with a specific this value and individual arguments provided one by one. This makes it possible to set the context (the this keyword) for a function call and even borrow methods from one object to use on another object
// In this example, setUsername is a standalone function that sets the username property on the object it is called with. By using call() within the createUser constructor, we ensure that setUsername operates in the context of the newly created user object (this), allowing us to set the username correctly.