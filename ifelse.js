temperature = 50

if(temperature>=40){
    console.log("temperature is hot")
}
else{
    console.log("temperature is normal")
}


//-----------------------------------------------

const score= 200

if(score>100){
    const power = "fly"
    console.log(`user power: ${power}`)
}

//-----------------------------------------------


const balance = 1000

if(balance > 500) console.log("more than 500");


// -----------------------------------------------


if(balance < 500  ){

    console.log ("less than 500")
}else if (balance < 750) {
    console.log("less than 750 ")
    
}else if (balance<900) {
    console.log("less than 900")   
}
else{
    console.log("less than 1200")
}

// ------------------ multi conditional --------------------

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle= false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){
    console.log("allowed to buy products");

}


if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in ");

}



// Nullish coalescing operator ?? : null undefined


let val1;

val1 = 5 ?? 10
val1 = null ?? 20


console.log(val1)


///------ ternary operator 

const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80"): console.log("more than 80")

