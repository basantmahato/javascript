// This allows us to destruct an array and collect the leftovers.

// let arr = [1,2,3,4,5,6,7,8,9]

// const arr2 = [123, ...arr]

// console.log(arr2)

let a, b, c, rest;
const arr1 = [1,2,3,4,5,6,7,8];

[a, b, c, ...rest] = arr1;

console.log(rest)