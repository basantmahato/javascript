
const user1 = {
    username: "alice", 
    score: 95,          

    
    login: function() {
        console.log(`${this.username} has logged in.`);
    }
};

user1.login(); 