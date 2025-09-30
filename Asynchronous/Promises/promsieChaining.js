url = "https://jsonplaceholder.typicode.com/users";

function one() {
  return new Promise(async (resolve, reject) => {
    const data = await fetch(url);
    const usersdata = await data.json();
    resolve(usersdata);
    
  });
}

function two() {
  return new Promise(async (resolve, reject) => {
    const data = await fetch(url);
    const usersdata = await data.json();
    resolve(usersdata);
    reject("error")
  });
}

one()
  .then((usersdata) => {
    console.log(usersdata[0]);
    return two();
  })

 



    .then((usersdata) => {
    console.log(usersdata[1]);
  });

