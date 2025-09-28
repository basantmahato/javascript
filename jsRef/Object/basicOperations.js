const person = {
    name : "basant",
    roll: 22 ,
    city: "jsr"
};

person.city = "rishika"

delete person.city;

const val = 'roll' in person;

console.log(val);


console.log(person);

for(let key in person){
    console.log(key);
    console.log(person[key]);

}