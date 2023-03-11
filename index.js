let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio('Sound/adio.wav');
const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

};

const statGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

//   Relode the page
const newGameBegin = () =>{
    
    window.location.reload();
    audio.play();
};

// Start game 
 const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);

 }

const compareGuess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;


    // Check the value low or high
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High 😮";
            userNumberUpdate.value = "";
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 😔";
            userNumberUpdate.value = "";
        }
        else {
            userGuessUpdate.innerHTML = "It's Correct 🎉";
            userNumberUpdate.value = "";
            startNewGame();
        }
        
    }
    else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!!😥Correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You Loose!!😥Correct number was ${computerGuess}`;
            userNumberUpdate.value = "";
            startNewGame();
        }
        else {
            userGuessUpdate.innerHTML = "It's Correct 🎉";
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML = userGuess.length;

};

const easyMode = () => {
    audio.play();
    maxGuess = 10;
    statGame();

};
const hardMode = () => {
    audio.play();
    maxGuess = 5;
    statGame();

};