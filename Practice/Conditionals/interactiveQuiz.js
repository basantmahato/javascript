const correctAnswers = {
    q1 : 'a',
    q2 : 'c',
    q3 : 'b'
};

const quizForm = document.getElementById("quiz-form")
const resultMessage = document.getElementById("resultMessage")


quizForm.addEventListener('submit', (event)=>{

    event.preventDefault()

    let score = 0;

    const userAnswers = {
        q1 : quizForm.q1.value,
        q2 : quizForm.q2.value,
        q3 : quizForm.q3.value,
    };


    console.log(userAnswers)


    for (q in correctAnswers){
        if(userAnswers[q]=== correctAnswers[q]){

            score++;

        }
         
    }

    resultMessage.innerText = `you scored ${score} out of 3` ;



})