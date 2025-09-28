const car = { brand: "Tesla" };

console.log(Object.isExtensible(car)); // true ✅ (new props can be added)

Object.preventExtensions(car);

console.log(Object.isExtensible(car)); // false ❌ (no new props allowed)

car.model = "Model 3"; // won't be added
console.log(car);      // { brand: "Tesla" }


// Object.preventExtensions() allows modifications, but prevents addition of properties.

// Object.seal() allows modifications, but prevents additions and deletions of properties.

// Object.freeze() prevents modifications, additions and deletions of properties.

