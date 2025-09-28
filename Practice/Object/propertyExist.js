const obj = {
    name : "harish",
    age: 25 ,
    city : "ranchi",
    state : "jharkhand"
}

Object.defineProperties(obj,{
    planet : {value : "eaarth"}
})


const bool = 'age' in obj
const bool2 = Object.hasOwn(obj,'planet')



console.log(bool)
console.log(bool2)