class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // class method (goes to Person.prototype)
    showData() {
        console.log("Person Name:", this.name);
        console.log("Person Age:", this.age);
    }
}

class Developer extends Person {
    constructor(name, age, jobrole) {
        // call parent constructor
        super(name, age);
        this.jobrole = jobrole;
    }

    // method of Developer
    showDevelopersData() {
        console.log("Person Name:", this.name);
        console.log("Person Age:", this.age);
        console.log("Job Role:", this.jobrole);
    }
}

// Example usage
const developer = new Developer("Basant", 22, "Frontend Developer");
developer.showData();             // from Person
developer.showDevelopersData();   // from Developer
