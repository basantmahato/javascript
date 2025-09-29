// // 1. The JSON Data (as a String)
// const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';

// // 2. Use JSON.parse() to convert the string into a JavaScript object
// const jsObject = JSON.parse(jsonString);

// // 3. Now you can access the data using dot notation (like a regular object)
// console.log(jsObject);
// // Output: { name: 'Alice', age: 30, city: 'New York' }

// console.log(jsObject.name);
// // Output: Alice

// console.log(typeof jsonString); 
// // Output: string

// console.log(typeof jsObject); 
// // Output: object


const dataFromAPI = [
  {
    "id": 101,
    "username": "coder_basant",
    "email": "basant@example.com",
    "is_active": true,
    "roles": ["admin", "editor"],
    "profile": {
      "city": "Bangalore",
      "joined_date": "2024-08-15"
    }
  },
  {
    "id": 102,
    "username": "api_user2",
    "email": "user2@example.com",
    "is_active": false,
    "roles": ["viewer"],
    "profile": {
      "city": "Mumbai",
      "joined_date": "2024-09-01"
    }
  }
]

const jsonData = JSON.stringify(dataFromAPI)

console.log(jsonData)

console.log(JSON.parse(jsonData)[0].id)  

