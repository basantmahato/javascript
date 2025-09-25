// for 

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element ==5){
        console.log("5 is the middle")
    }
    console.log(element);
    
}


for (let i = 1; i <=10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log("inner loop" )
        
    }
    console.log("outer loop",i)
    
}


let myArray = ["flash", "batman","joker"]

for (let index = 0; index < myArray.length ; index++ ){
    const element = myArray[index];
    console.log(element)
}

// break and continue 


for (let i = 1; i <= 20; i++) {
    if (i ==5){
        console.log("DETECTED 5")
        break
    }
    console.log(`value of i is ${i}`)
    
}
for (let i = 1; i <= 20; i++) {
    if (i ==5){
        console.log("DETECTED 5")
        continue
    }
    console.log(`value of i is ${i}`)
    
}