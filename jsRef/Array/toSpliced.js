// Description
// The toSpliced() method adds and/or removes array elements.

// The toSpliced() method returns a new array.

// The toSpliced() method does not change the original array.

// The toSpliced() method is the copying version of the splice() method.

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
const fruits2 = fruits.toSpliced(2, 0, "Lemon", "Kiwi");

console.log(fruits2)