const guess = document.getElementById("guessInput")
const submitBtn = document.getElementById("submitBtn")
const attempts = document.getElementById("attemptsCount")
const resetBtn = document.getElementById("resetBtn")

const hintMessage = document.getElementById("hint-message")

let counter = 0;


submitBtn.addEventListener("click", ()=>{

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guessValue = guess.value;
    counter = counter+1;

    attempts.innerText = counter;


    console.log(counter)
    console.log(randomNumber)
    console.log(guessValue)

    if(randomNumber == guessValue){

        hintMessage.innerText = "Correct guess"
        console.log("correct guess")

        resetBtn.style.display = "block"
        submitBtn.style.display = "none"



    }else{
        resetBtn.style.display = "block"
        submitBtn.style.display = "none"
    }

    resetBtn.addEventListener("click", ()=>{
        location.reload()
    
    })


})