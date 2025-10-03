const numbers = [1,2,3,4,5];

const even = numbers.filter(num => num%2===0)
console.log(even);


// array of objects Filter 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


// map 


const nums = [1,2,3,4,5,6,7,8,9,10]
const squares = nums.map(n => n* n)

const newNums = nums.map((num)=>{return num + 10})

console.log(squares)
console.log(newNums)


// chaining 

const Values = [1,2,3,4,5,6,7,8,9,10]
const newValues = Values.map( val => val+10).map(val => val+1)
.filter((val)=>{return val >= 15})
console.log(newValues)


// reduce 

const myValues = [1,2,3,4,5]
const myTotal = myValues.reduce(function(acc, currval){
    console.log(`acc:${acc} and currval:${currval}`)
    return acc + currval
},0)


console.log(myTotal)

// reduce arrow funtion

const myTotal2 = myValues.reduce((acc,currval)=>acc+currval,0)

console.log(myTotal2)


const shoppingCart = [{item:"js",price:299},{item:"python",price:399},{item:"DataScience",price:599}]

const totalPrice = shoppingCart.reduce((acc ,item)=>acc + item.price,0)

console.log(totalPrice)