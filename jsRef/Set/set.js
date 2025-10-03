// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values


const letters = new Set(["a", "b", "c"]);
letters.add("d");
letters.add("e");
letters.add("f");

console.log(letters);

let val = letters.forEach(element => {
    console.log(element);
});


letters.delete("f"); // removes f from the set
console.log(letters);

letters.keys(); // returns an iterator with all keys in the set
letters.values();


console.log(letters.has("a")); // returns true
console.log(letters.size); // returns the size of the set
letters.clear(); // removes all elements from the set
console.log(letters);
console.log(letters.size); // returns 0