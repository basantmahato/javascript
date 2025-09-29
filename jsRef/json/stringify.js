const obj = {
    name: "Basant",
    age: 21,
    city: "Bangalore",
    skills: ["JavaScript", "React", "Node.js" , undefined, null],
    isEmployed : false,
    address: {
        street: "123 Main St",
        zip: "560001"
    },
    functionExample: function() {
        console.log("This is a function");
    }

}

const jsonData = JSON.stringify(obj);

console.log('JSON DATA:', jsonData);


	// Convert a JavaScript object to a JSON string
