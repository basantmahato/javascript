const userEmail = "x@teen.x"

if (userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}


//--
// false , 0 , -0 , BigInt 0n , "", null , undefined ,NaN

//--
// "0" , false , " ",[],{}, function(){}  

const arr=[]

if(arr.length === 0){
    console.log("Array is empty")
}

const emptyObject = {}


if (Object.keys(emptyObject).length === 0){
    console.log("object is empty")

}