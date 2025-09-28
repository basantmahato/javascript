const person = {
    name : "basant",
    roll: 22 ,
    city: "jsr"
};

const man = Object.create(person)


man.name = "hacker"


console.log(man)