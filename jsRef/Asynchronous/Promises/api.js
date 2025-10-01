url = "https://jsonplaceholder.typicode.com/users"

function fetchApi(){
    return new Promise((resolve , reject)=>{
        setTimeout(async()=>{
            const response = await fetch(url)

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }



            const userdata = await response.json()
            resolve(userdata)
        },2000)
    })
}

fetchApi()
    .then((userdata)=>{
        console.log(userdata[0])
    })

