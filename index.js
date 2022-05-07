// Variables
let computerGuess;
let userGuess = [];
let maxGuess = 0;
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("input");
let audio = new Audio("audio/2.wav");
let audio1 = new Audio("audio/1.wav");
let audio2 = new Audio("audio/3.wav");
let audio4 = new Audio("audio/4.wav");
// function for genrating random number
const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess);
};
init(); // fun call

document.getElementById("gameArea").style.display = "none";

//startGame()
const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

// newGame
const startNewGame = () => {
  audio2.play();
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

// newGameBegin
const newGameBegin = () => {
  window.location.reload();
};
// main logic
const compareGuess = () => {
  audio2.play();
  const userNumber = Number(userNumberUpdate.value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  // check
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is High 😲";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your Guess is Low 😟";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = "It's Correct 😎";
      audio4.play();
      startNewGame();
    }
  }
  else {
    if (userNumber > computerGuess) {
      audio1.play();
      userGuessUpdate.innerHTML = `You Loose! Correct value was ${computerGuess}.`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      audio1.play();
      userGuessUpdate.innerHTML = `You Loose! Correct value was ${computerGuess}.`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      audio4.play();
      userGuessUpdate.innerHTML = "It's Correct 😎";
      startNewGame();
    }
  }
  document.getElementById("attempts").innerHTML = userGuess.length;
};

// easy func
const easy = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};
// medium
const medium = () => {
  audio.play();
  maxGuess = 7;
  startGame();
};
// hard
const hard = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
