'use strict';

const WINNING_SCORE = 50; 
let scores = [0, 0]; 
let currentScore = 0; 
let activePlayer = 0; 
let playing = true;

const player0El = document.querySelector('.player-1-panel');
const player1El = document.querySelector('.player-2-panel');
const score0El = document.querySelector('.player-1-high-score'); 
const score1El = document.querySelector('.player-2-high-score');
const current0El = document.querySelector('.player-1-current-score');
const current1El = document.querySelector('.player-2-current-score');
const diceEl = document.querySelector('.dice-img');
const btnRoll = document.querySelector('.btn-roll');
const btnReset = document.querySelector('.btn-reset');
const winnerMsg = document.querySelector('.winner-message');

const switchPlayer = function () {
  document.querySelector(`.player-${activePlayer + 1}-current-score`).textContent = 0;
  
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0; 

  player0El.classList.toggle('active-player');
  player1El.classList.toggle('active-player');

  document.querySelector('.player-1-panel .player-name').textContent = activePlayer === 0 ? 'Player 1 🎲' : 'Player 1';
  document.querySelector('.player-2-panel .player-name').textContent = activePlayer === 1 ? 'Player 2 🎲' : 'Player 2';
};

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  winnerMsg.classList.add('hidden');
  btnRoll.disabled = false;
  
  player0El.classList.remove('winner-panel');
  player1El.classList.remove('winner-panel');
  player0El.classList.add('active-player');
  player1El.classList.remove('active-player');
  
  document.querySelector('.player-1-panel .player-name').textContent = 'Player 1 🎲';
  document.querySelector('.player-2-panel .player-name').textContent = 'Player 2';
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`.player-${activePlayer + 1}-current-score`).textContent = currentScore;
      
      scores[activePlayer] += currentScore;
      document.querySelector(`.player-${activePlayer + 1}-high-score`).textContent = scores[activePlayer];
      
      if (scores[activePlayer] >= WINNING_SCORE) {
          playing = false;
          diceEl.classList.add('hidden');
          winnerMsg.classList.remove('hidden');
          btnRoll.disabled = true; 

          document.querySelector(`.player-${activePlayer + 1}-panel`).classList.remove('active-player');
          document.querySelector(`.player-${activePlayer + 1}-panel`).classList.add('winner-panel');

          document.querySelector(`.player-${activePlayer + 1}-panel .player-name`).textContent = `Player ${activePlayer + 1}`;
          return; 
      }
      
      switchPlayer();
      
    } else {
      switchPlayer();
    }
  }
});

btnReset.addEventListener('click', init);