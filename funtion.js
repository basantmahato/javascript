function calMyName(){
    console.log("Hello! Ruby")
}

calMyName()

// function addTwoNumbers(number1,number2){
//    console.log(number1+number2) 
// }

function addTwoNumbers(number1,number2){
//     let result = number1+number2
//    return result

return number1+number2
}


const result = addTwoNumbers(5,5)
// console.log(result)




function loginUserMessage(username){
    if (username === undefined){

        console.log("Please Enter A Username")
        return

    }
    return `${username} just logged in`

}

console.log(loginUserMessage())
