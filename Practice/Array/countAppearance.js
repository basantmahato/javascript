const fruits = ["apple", "banana", "apple", "orange", "banana"];

const fruitCounts = fruits.reduce((counts, fruit) => {
  counts[fruit] = (counts[fruit] || 0) + 1;
  return counts;
}, {});

console.log(fruitCounts);