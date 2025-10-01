const obj = {
  name: "basant",
  contact: 8709667260,
  age: 23,
};

// const promiseOne = new Promise((resolve , reject) =>{

//     setTimeout(()=>{

//         const data = obj;

//         console.log("Async Function is getting the data")

//         resolve(data)

//     },2000)

// })

// promiseOne.then((data)=>{

//     console.log(data.name)

// })

///

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(obj);
    resolve();
  }, 800);
}).then(() => {
  console.log("object resolved");
});

// 3rd promise

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("after 2000");
    resolve();
  }, 2000);
});
promiseThree.then("resolved");

//  4th

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
   
    let data = obj;

    try {
      resolve(data);
    } catch (error) {
      reject("Reject the code");
    }
  }, 5000);
});

promiseFour
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data.name);
  })

  .catch((error) => {
    console.log(error);
  }).finally(()=>{
    console.log("finally done");
  });


  // promise 5 


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        resolve({username: "ba5ant" , pass : 12345})

    },6000)
})


// promiseFive.then((data)=>{
//     console.log(data)
// })


async function consume (){

    // const response = await promiseFive
    // console.log(response)

    try {
        const data = await promiseFive
        console.log("data fetched sucessfully")
    } catch (error) {

        console.logO("error occured in consume ")
        
    }
}

consume();



// 


async function dataFetch() {

   try {

     data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const postsData = await data.json()
    console.log(postsData)
    
   } catch (error) {

    console.log("error")
    
   }
    
}

dataFetch()



// 

const apiData = new Promise( async(resolve,reject)=>{

    response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let postsData = await response.json()
    resolve(postsData)

    
}).then((postsData)=>{
    console.log(postsData)
}).catch(()=>{
    console.log("error")
})