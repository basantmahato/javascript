const pass = document.getElementById("password");
const passReEntered = document.getElementById("passwordReEntered");
const msg = document.getElementById("message")
const btn = document.getElementById("button");


btn.addEventListener('click',()=>{

    let passValue = pass.value;
    let passReEnteredValue = passReEntered.value;
    let length = passValue.length;



    console.log(passValue)
    console.log(passReEnteredValue)

    if(!passValue && !passReEnteredValue || passValue == '' || passReEnteredValue == '' ){
        msg.innerText = "Password field empty"
    }else if ( passValue == passReEnteredValue && length == 8){
        msg.innerText = "Password matched"
    }else{
        msg.innerText = "Password Mis Matched or incorect length"
    }

})