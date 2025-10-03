msg = document.getElementById("message")
btn = document.getElementById("button")

btn.onclick = () => { 

      if(msg.textContent === ''){

        msg.innerText = 'Hello From Javascript'
    
      }else{
        msg.innerText = 'GoodBye!'
      }

}
