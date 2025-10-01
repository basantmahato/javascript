// function myFunction(callback) {
//     setTimeout(() => {
//         const data = { name: "Aman", age: 21 };
//         callback(data);
//     }, 3000);
// }

// myFunction((data) => {
//     console.log("Data:", data);
// });



// function addNumbers(callback) {
    
//     setTimeout(() => {
//         let result = 5 + 10; 
//         callback(result);    
//     }, 2000);
// }

// addNumbers((answer) => {
//     console.log("The answer is:", answer);
// });



// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, title: "Sample Data" };
//         callback(data);
//     }, 1500);
// }

// fetchData((data) => {
//     console.log("Fetched Data:", data);
// });



function calculate(a,b,callback){
    setTimeout(() => {
        let sum = a + b;
        callback(sum); // callback is calling 
    }, 1000);
}

calculate(7,7,(result)=>{
    console.log("Sum is:",result);
});