// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = 'xyz123'
tinderUser.name = 'Vasanth'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "xyz@gmail.com",
    fullname:{
        first:"Vasanth",
        middle:"Kumar",
        last:"Mahato"
    }
}

console.log(regularUser.fullname.first)

const obj1={

1: "a",
2: "b",
3: "c",
}

const obj2 ={
    4:"d",
    5:"e",
    6:"f"
}


const obj3 = {obj1 , obj2}
console.log(obj3)


const obj4 = Object.assign({}, obj1 , obj2)
console.log(obj4)


const obj5 = {
    ...obj1,...obj2
}

console.log(obj5)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))