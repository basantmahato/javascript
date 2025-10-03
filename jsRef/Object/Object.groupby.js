const people = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "John", lastName: "Cena" }
];


// If you had an array of obj

const grouped = Object.groupBy(people, person => person.firstName);

console.log(grouped);
