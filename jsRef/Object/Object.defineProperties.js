// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add Properties
Object.defineProperties(person, {
  language: {value: "en"},
  year: {value: 2025}
});

console.log(person);

console.log(person.language)
console.log|(person.year)

let desc=Object.getOwnPropertyDescriptors(person);
console.log(desc)