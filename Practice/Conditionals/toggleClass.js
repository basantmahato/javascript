box = document.getElementById("box")
btn = document.getElementById("button")
btn2 = document.getElementById("button2")


btn.addEventListener('click',()=>{

    if(box.classList.contains("bgc")){
            box.classList.remove("bgc")
            btn.innerText ="add class"
    }else{
        box.classList.add("bgc")
        btn.innerText ="remove class"
    }

})
