const numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}

const reduced = numbers.reduceRight(myFunc);


console.log(reduced)



// The reduceRight() method executes a reducer function for each array element.

// The reduceRight() method works from right to left.

// The reduceRight() method returns a single value: the function's accumulated result.

// The reduceRight() method does not execute the function for empty elements.