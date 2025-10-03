const password = document.getElementById("password");
const btn = document.getElementById("submit")
const msg = document.getElementById("message")

btn.addEventListener('click', ()=>{

    const passEntered = password.value;
    const passEnteredLength = passEntered.length;

    let hasUpperCase = /[A-Z]/.test(passEntered);
    let hasLowerCase = /[a-z]/.test(passEntered);
    let hasNumber = /[0-9]/.test(passEntered);
    let hasSpecialChar = /[!@#$%^&*]/.test(passEntered);

    
    if(passEnteredLength >=8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar){
        msg.innerText = 'Valid pass'
    }else{
        msg.innerText = 'Invlid pass'

    }
})