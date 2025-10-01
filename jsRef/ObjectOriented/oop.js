const user = {
    username: "basant",
    loginCount: 8,

    getuser : function(){
        console.log("got user")
        console.log(this.loginCount)
        console.log(this)
    }
}

console.log(user.getuser())

console.log(this)

