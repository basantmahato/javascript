// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.


const ages = [3, 10, 18, 20];

const data = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}


console.log(data)