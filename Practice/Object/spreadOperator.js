const obj = {
    name : "harish",
    age: 25 ,
    city : "ranchi",
    state : "jharkhand"
}


console.log(obj.age)

obj.city = "patna"

console.log(obj.city)


const newObj = {
    ...obj ,
    country: "india"
}


console.log(newObj)