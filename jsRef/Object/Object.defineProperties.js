// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add Properties
Object.defineProperties(person, {
  language: {value: "en"},
  year: {value: "Hello"}
});

console.log(person);

console.log(person.language)

let desc=Object.getOwnPropertyDescriptors(person);
console.log(desc)