const person = {
  name: "harish",
  age: 25,
  city: "patna",
  state: "jharkhand",
  country: "India",
  print : function (){
    console.log(this.state)
  }
}

console.log(person.hello)
person.print()


