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



let desc=Object.getOwnPropertyDescriptors(person);
console.log(desc)