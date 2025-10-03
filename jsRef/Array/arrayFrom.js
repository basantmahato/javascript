// The Array.from() method returns an array from any object with a length property.

// The Array.from() method returns an array from any iterable object.


let text = "hello"
let arr = Array.from(text)
console.log(arr)


const numbers = [1,2,3,4,5]
let newArr = Array.from(numbers, x => x * 2)

console.log(newArr)

let mappedArr = numbers.map(num => num+ 10)

console.log(mappedArr)

