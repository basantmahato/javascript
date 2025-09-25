function printFibonacciSeries(n) {
  let a = 0;
  let b = 1;
  let nextTerm;

  if (n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  // Handle the first two terms as special cases
  if (n >= 1) {
    console.log(a);
  }

  if (n >= 2) {
    console.log(b);
  }

  // Loop from the third term up to n
  for (let i = 2; i < n; i++) {
    nextTerm = a + b;
    console.log(nextTerm);
    a = b;
    b = nextTerm;
  }
}

// Example usage: Print the first 10 terms
printFibonacciSeries(10);