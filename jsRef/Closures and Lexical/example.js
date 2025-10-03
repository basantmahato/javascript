function makeAdder(x) {
  // 'x' is captured by the closure
  return function(y) {
    return x + y; // The inner function uses the captured 'x'
  };
}

// Create a specialized function 'add5'.
// 'add5' is a closure that permanently "remembers" x = 5.
const add5 = makeAdder(5);

// Create another specialized function 'add10'.
// 'add10' is an independent closure that permanently "remembers" x = 10.
const add10 = makeAdder(10);

console.log(add5(2));   // Output: 7 (Calculates 5 + 2)
console.log(add10(2));  // Output: 12 (Calculates 10 + 2)