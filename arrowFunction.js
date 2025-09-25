const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


user.welcomeMessage()

user.username = "ruby"

user.welcomeMessage()


// console.log(this)

// function chai (){
//     let username = "ramesh"
//     console.log(this)
// }


// chai()



// const chai = function(){
//     let username = "basant"
//     console.log(this.username)
// }



let username = "ba5ant"


// arrow funtion

// const chai = () => {
//     let username = "basant"
//     console.log(this.username)
// }



// chai()

// const addTwo =(num1 , num2 ) => {
//     return num1 + num2 
// }

const addTwo =(num1 , num2 ) => (num1 + num2) 



console.log(addTwo(5,7))