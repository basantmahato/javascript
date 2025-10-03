class user{

    constructor(email , password){

        this.email = email;
        this.password = password;
 
    }
       get password(){
        return this._password = this._password + "****"
       }

       set password(newPassword){
        this._password = newPassword
       }

};


const basant = new user ("basasnt@gmail.com", 123)
console.log(basant.password)



