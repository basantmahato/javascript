const input = document.getElementById("input");
const checkButton = document.getElementById("check");
const againButton = document.getElementById("again");

let correctNumberShow = document.getElementById("correctNumber");

const message = document.getElementById("message");

const counterValue = document.getElementById("counterValue");

const highscoreValue = document.getElementById("highscore");

const leaderboardBtn = document.getElementById("leaderboardBtn");

const leaderboardContainer = document.getElementById("leaderboardContainer");

const leaderboardli = document.getElementById("leaderboardli");

counterValue.innerText = "Score:" + 20;

let randomNumber = Math.floor(Math.random() * 20) + 1;
let counter = 20;
let highscore = 0;
let player = window.prompt("Enter your name");



againButton.addEventListener("click", () => {
  window.location.reload();
});

checkButton.addEventListener("click", () => {
  console.log("randaom Number", randomNumber);

  const inputValue = input.value;

  console.log(inputValue);

  if (randomNumber == inputValue) {
    console.log("correct guess");
    counter = counter + 1;
    correctNumberShow.innerText = inputValue;
    message.innerHTML = "<span >Correct Guess </span>";
    document.querySelector("body").style.backgroundColor = "green";
    highscore = highscore + 1;
    console.log("highscore", highscore);
    highscoreValue.innerText = highscore;

    if (player) {
  leaderboardli.innerHTML = `<li>${player} : ${highscore}</li>`;
}
  } else {
    console.log("incorrect");
    counter = counter - 1;
    message.innerHTML = "<span >Wrong Guess</span>";
    correctNumberShow.innerText = "?";
    document.querySelector("body").style.backgroundColor = "red";
  }

  console.log(counter);

  if (counter <= 0) {
    message.innerHTML = "<span >Game Over </span>";
    checkButton.style.display = "none";
    againButton.style.display = "block";
    correctNumberShow.innerText = randomNumber;
    input.disabled = true;
  }

  counterValue.innerText = "Score:" + counter;
});

leaderboardBtn.addEventListener("click", () => {
  leaderboardContainer.style.display = "block";
});


