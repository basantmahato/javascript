const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
])


const val = fruits.get("apples");
console.log(val);

fruits.delete("bananas");
console.log(fruits);

fruits.set("grapes", 400);
console.log(fruits);

console.log(fruits.values());
console.log(fruits.keys());
console.log(fruits.entries());

fruits.forEach((value, key) => {
    console.log(key, value);
});

fruits.clear();
console.log(fruits);


fruits.values();
fruits.keys();
fruits.entries();
console.log(fruits.size);