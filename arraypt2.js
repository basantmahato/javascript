const myArr = [1,2,4,5,6,7]
console.log(myArr)


const marvel = ['thor','ironman','hulk']
const dc = ['batman', 'joker','wonder women']


marvel.push(dc)

console.log(marvel)
console.log(marvel[3])
console.log(marvel[3][2])

const concat1 = marvel.concat(dc)

console.log(concat1)


arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9,10]

const add = arr1.concat(arr2)
console.log(add) 

const all = [...arr1, ...arr2]
console.log(all)


arrx = [1,2,3,[5,6,7,[6,5,4],45],8]

const arrflat =arrx.flat(Infinity)

console.log(arrflat)