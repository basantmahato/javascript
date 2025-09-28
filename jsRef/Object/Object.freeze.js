const person = {
    name: "basant",
    roll : 22,
    city : "jamshedpur"

}

//  const value = Object.freeze(person)

Object.freeze(person)

 person.name = "hacker"

 console.log(person.name)

// Freezes an object, preventing new properties from being added, existing properties from being removed, or the values or writability of existing properties from being changed.