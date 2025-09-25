//passing objects
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

function handleObject(anyobject){
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}}`)
}

handleObject({
    username: "sam",
    price:55
})


// passing array


const myNewArray = [200,300,400,500,600,700]

function returnSecondValue(getArray){

    return getArray[1]
}

console.log(returnSecondValue(myNewArray

))