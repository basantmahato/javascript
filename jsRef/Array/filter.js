const ages = [32, 33, 16, 40]

const result = ages.filter(age => age > 18)

console.log(result)



// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.


const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: true },
    { name: "Eve", active: false } // The rule fails here
];


const checkActive = (users) =>{

    return users.active === true;
}

let data = users.filter(checkActive)

console.log(data)