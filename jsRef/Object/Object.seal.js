const person = {
    name: "basant",
    roll : 22,
    city : "jamshedpur"

}

//  const value = Object.freeze(person)

Object.seal(person)

 person.name = "hacker"

 console.log(person.name)

//  Seals an object, preventing new properties from being added and existing properties from being deleted, but still allowing modification of existing property values.