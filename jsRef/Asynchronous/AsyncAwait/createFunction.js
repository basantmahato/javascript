 fetchUser = async (uid) =>{
   let userData = await fetch("https://jsonplaceholder.typicode.com/users/" )
   let data = await userData.json()
   console.log(data)
   let currentUser = (data[uid])
   console.log(currentUser.username)}

uid = 0;
fetchUser(uid)

console.log("Hello!")

