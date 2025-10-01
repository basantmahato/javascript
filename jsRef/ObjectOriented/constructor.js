function User(username,loginCount){

    this.username = username
    this.loginCount = loginCount



}

const userInfo = new User("ba5ant", 77)
const userInfo2 = new User("devil" , 77)

// if new keyword is not used it will use the same execution context while function call

console.log(userInfo)
console.log(userInfo2) 


             