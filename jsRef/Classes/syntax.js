class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
  }
}

class Model extends Car {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = 2003;
  }

    displayInfo() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

const myModel = new Model("Honda", "Civic", 2020);
myModel.displayInfo(); // Car Brand: Honda, Model: Civic, Year: 2020

const myCar = new Car("Toyota", "Camry");
myCar.displayInfo(); //