let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15


// Start with acc = 0 (initial value).

// Iteration:

// 0 + 1 = 1

// 1 + 2 = 3

// 3 + 3 = 6

// 6 + 4 = 10

// 10 + 5 = 15


// The reduce() method in JavaScript is used on arrays to reduce all elements into a single value.

// It takes a callback function and an optional initial value.