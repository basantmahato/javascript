const myArr = [1, 2, 3, 4, 5, 6];

const newArr = myArr.flatMap(n => [n, n * 10]); 


console.log(newArr)