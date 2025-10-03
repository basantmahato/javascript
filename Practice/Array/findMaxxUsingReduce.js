const list =[1,2,4,6,67567,8,8,8,67]

const val = list.reduce((acc,val)=> val > acc ? val : acc,list[0])

console.log(val)