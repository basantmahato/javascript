// let promise = new Promise((resolve, reject) => {
//     console.log("Promise is created");

//     setTimeout(() => { resolve("Promise is resolved"); }, 2000);

//     // setTimeout(() => { reject("Promise is rejected"); }, 1000);
// }
// );



function mydata() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "Rohit", age: 23 };
            resolve(data);
        }, 2000);
    });
}

mydata()
    .then((data) => { 
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error)
    });