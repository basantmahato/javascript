// Immediately invoked function expresiion 

// function xyz(){
//     console.log(`DB Connected`)
// }
// xyz()


(function xyz(){
    console.log(`DB Connected`)
})
();


( () => {
    console.log("DB Connected Two")
})();


((name)=>{
    console.log(`Name is ${name}`)
})("ruby")