
const userData = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(userData);

localStorage.setItem("user", jsonString);

const storedData = localStorage.getItem("user");


console.log(storedData);
