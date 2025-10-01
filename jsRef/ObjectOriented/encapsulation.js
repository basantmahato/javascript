class Circle {
    #radius; 

    constructor(radius) {
        this.#radius = radius;
    }

    getArea() {
        return Math.PI * this.#radius * this.#radius;
    }
}

const myCircle = new Circle(10);

console.log(`Circle Area: ${myCircle.getArea()}`); 

// console.log(myCircle.#radius);