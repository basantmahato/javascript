// The Class (Blueprint)
class User {
    // 1. constructor: A special method called when a new object is created
    constructor(username, score) {
      
        this.username = username;
        this.score = score;
    }

  
    login() {
        console.log(`${this.username} has logged in.`);
    }

    incrementScore() {
        this.score++;
    }
}

// Creating Objects (Instances) from the Class
const user2 = new User("bob", 80);    
const user3 = new User("charlie", 70); 

user2.incrementScore();
console.log(user2.score); 
user3.login();            