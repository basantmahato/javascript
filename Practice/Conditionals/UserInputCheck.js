const pass = document.getElementById("password");
const btn = document.getElementById("button")
const msg = document.getElementById("message")


btn.addEventListener('click',  () => {

    const password = '29381'

    passValue = pass.value;

    if(passValue === password){

        msg.innerText = 'Login Success'

    }else{
        msg.innerText = 'Login Failed'
    }
    

})