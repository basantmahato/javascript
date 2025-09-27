// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.



const ages = [3, 10, 18, 20];

const data = ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}


console.log(data)