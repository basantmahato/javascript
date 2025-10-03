// function render(callback){
//     console.log("getting data...")
//     setTimeout(()=>{

//         let data = "basant" 
        

//         callback(data)

//     },3000)
// }


// render((data)=>{

//     console.log("this is :" , data)

// })

// callback hell


function getData(dataId , callback){
    setTimeout(()=>{
        console.log(dataId)
    },3100)

    callback()

}



// what if i try to call different data id from server 

// getData("148")
// getData("4465")
// getData("7715")


// but while calling like this it will throw all the data at once 


// so to remove this issue we use callback hell 

getData("148", () => {
    getData("4465", () => {
        getData("7715", () => {
            console.log("All data loaded!");
        });
    });
});

