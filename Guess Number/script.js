let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#submitBtn");
const guessHistory = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".remainChance");
const msgLowOrHigh = document.querySelector(".msgHelper");
const result = document.querySelector("#result");

let guessSlot = [];
let numGuesses = 1;
let playGame = true;

const p = document.createElement("p");
p.style.border = "5px solid rgb(255, 255, 255)";
p.style.borderRadius = "23px";
p.style.margin = "28px 547px";
p.style.width = "16vw";
p.style.fontSize = "13px";
p.style. backgroundColor = "cadetblue";

p.addEventListener("mouseover", function() {
    p.classList.add("hover-effectp");
});

p.addEventListener("mouseout", function() {
    p.classList.remove("hover-effectp");
})

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Please enter a valid value`);
    }
    else if(guess < 1){
        alert(`Please enter a value greater than 1`);
    }
    else if(guess > 100){
        alert(`Please enter a value lower than 100`);
    }
    else{

        guessSlot.push(guess);
        if (numGuesses === 10) {
            displayMessage(`Game Over!! Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            diplayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`Congratulations You Win!! Your guess is right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Nahh Too Low !!`);
    }
    else if(guess > randomNumber){
        displayMessage(`Nahh Too High !!`);
    }
}

function displayMessage(msg){
    msgLowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function diplayGuess(guess){
    userInput.value = "";
    guessHistory.innerHTML += `${guess}, `;
    guessRemaining.innerHTML = `${10 - numGuesses}`;
    numGuesses++;
}

function endGame(guess){
    playGame = false;
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = "<h2 id='startNewGame'>Start New Game</h2>";
    result.appendChild(p);
    newGame();
}

function newGame(guess){
    const newGame = document.querySelector("#startNewGame");
    newGame.style.cursor = "pointer";
    newGame.addEventListener("click", function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        guessSlot = [];
        numGuesses = 1;
        guessHistory.innerHTML = "";
        guessRemaining.innerHTML = `${11 - numGuesses}`;
        displayMessage("");
        userInput.removeAttribute("disabled");
        result.removeChild(p);

        playGame = true;
    })
}
