let user1 = {
    name:"basant",
    age: 22,
    isLoggedIn : false,


    greet : function(){
        console.log("helllo" , this.name)
    }
    
}

let allUsers = {
    allUsersData: "not present in DB",
    showAll: function () {
        console.log("Showing all users...");
    }
}


// this is called prototype chaining 
Object.setPrototypeOf(user1,allUsers)

console.log(user1.allUsersData)
user1.showAll()