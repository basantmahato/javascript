let uri = "https://jsonplaceholder.typicode.com/users"
let encoded = encodeURI(uri)

function fetchData() {
    
    fetch(encoded)
    .then( response => response.json())
    .then( data =>{
        console.log("users: " ,data[0])
    })

    .catch(err =>{
        console.log("error:" ,error )
    });

}


fetchData();

console.log("hello!")