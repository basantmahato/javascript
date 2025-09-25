const scode = document.getElementById("text");
const btn = document.getElementById("button");
const boxed = document.getElementById("box");


btn.addEventListener('click', () =>{
    let statusCode = scode.value;
    console.log(statusCode)


    if(statusCode === "200"){
        boxed.innerText = "OK "
        boxed.classList.remove("red")
        boxed.classList.add("green")

    }else if(statusCode === "404"){
        boxed.innerText = "ERROR "  
        boxed.classList.remove("green")
        boxed.classList.add("red")     
    }else{
        boxed.innerText = "Enter 404 , 200 or 199 "
    }
    
    
})