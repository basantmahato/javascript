const coding =["js","ruby","java","python"]

coding.forEach(  function (item) {
    console.log(item);
})


coding.forEach((item)=>{
    console.log(item)
})

// using refrence

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)



const myCoding = [
    {
        languageName:"javascript",
        languageFile:".js"
    },
    {
        languageName:"python",
        languageFile:".py"
    },
    {
        languageName:"java",
        languageFile:".java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFile);
})
myCoding.forEach((item)=>{
    console.log(item.languageName);
})