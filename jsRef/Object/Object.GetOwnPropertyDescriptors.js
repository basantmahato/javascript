// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe"
};

// Add Properties
Object.defineProperties(person, {
  firstName: {writable: true,
    enumerable:false,
    configurable:false
  },
    lastName: {writable: false,
    enumerable:true,
    configurable:false
  }
}); 



let desc=Object.getOwnPropertyDescriptors(person);
console.log(desc)