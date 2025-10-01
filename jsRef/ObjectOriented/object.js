// function multiplyby5(num){
//     return num*5;
// }

// console.log(multiplyby5(7))
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype)


function createUser(username , score){
    this.username = username
    this.score = score
}


createUser.prototype.increament = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(this.score)
}


const score = new createUser("ba5ant",75)

score.printme()



