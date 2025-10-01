class Animal {
    speak() {
        return "I am an animal.";
    }
}

class Dog extends Animal {
    speak() {
        return "Woof!";
    }
}

class Cat extends Animal {
    speak() {
        return "Meow!";
    }
}

const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach(animal => {
    console.log(animal.speak());
});