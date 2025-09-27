// Description
// prototype allows you to add new properties and methods to arrays.

// prototype is a property available with all JavaScript objects.

// Syntax
// Array.prototype.name = value



Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

console.log(fruits);