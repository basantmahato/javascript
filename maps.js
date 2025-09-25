const myMap = new Map();

myMap.set('name','ruby')
myMap.set('age',18)
myMap.set('id',22)



for(const key of myMap){
    console.log(key);
}

for(const[key , value]of myMap){
    console.log(key,value);
}


console.log(myMap.get('name'))
console.log(myMap.get('id'))
console.log(myMap.has('age'))

myMap.delete('id');

console.log(myMap.get('id'))


myMap.clear();

console.log(myMap.size)

const map = new Map()
map.set('IN','india')
map.set('PK','pakistan')
map.set('NEP','nepal')
map.set('UAE','dubai')


