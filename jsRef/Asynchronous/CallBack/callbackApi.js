function fetchData(callback) {
    setTimeout( async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const userdata = await data.json()
        callback(userdata)
    }, 1500);
}

fetchData((userdata) => {
    console.log("Fetched Data:", userdata[0]);
});

