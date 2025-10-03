// The every() method executes a function for each array element.


const ageValues = [17,18,20,11,21,22]


checkAge = (age) =>{
    return age > 10;
}


let store = ageValues.every(checkAge)

console.log(store)


// it returns only true and false.... 


const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: true },
    { name: "Eve", active: false } // The rule fails here
];

const allUsersActive = users.every(user => user.active === true);

console.log(allUsersActive); // Output: false