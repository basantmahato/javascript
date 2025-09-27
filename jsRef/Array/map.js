const numbers = [4, 9, 16, 25]; 

const newArr = numbers.map(numbers => numbers * 2)

console.log(newArr)


// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.