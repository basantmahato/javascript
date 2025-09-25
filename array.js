const myArray = [11,22,33,44,55]
const sNames = ['Arjun','Bheem']

console.log(myArray[4])
console.log(sNames[1])

myArray.push(6,7,8)

console.log(myArray)

myArray.pop()

console.log(myArray)

myArray.unshift(7)
console.log(myArray)

myArray.shift()
console.log(myArray)

console.log(myArray.includes(55))
console.log(myArray.indexOf(44))


const myArr2 = myArray.join()

console.log(myArr2)
console.log(typeof myArr2)

console.log("A", myArray)
const myn1 = myArray.slice(1,4)
console.log(myn1)


console.log("B",myArray)
const myn2 = myArray.splice(1,4)
console.log(myn2)

console.log("hello")

console.log(myArray)