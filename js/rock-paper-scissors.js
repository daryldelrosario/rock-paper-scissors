let playerScore = 0;
let pcScore = 0;
const playerChose = document.querySelector("#playerChose");
const pcChose = document.querySelector("#pcChose");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");
const playButton = document.querySelector("#playButton");

const buttons = document.querySelectorAll("button");
buttons.forEach((b) => {
    b.addEventListener("click", () => {
        let playerSelect = b.id;
        let pcSelect = getPCChoice();
        let roundResult = playRound(playerSelect, pcSelect);
        showScore();
        theWinner(roundResult);
    });
});

function playRound(playerSelect, pcSelect) {
    let capPlayerSelect = capitalise(playerSelect);

    let tie = `Both of you chose ${capPlayerSelect}, it's a Tie!`;
    let playerWin = `You Win! ${capPlayerSelect} beats ${pcSelect}.`;
    let pcWin = `You Lose! ${pcSelect} beats ${capPlayerSelect}.`;

    if(capPlayerSelect === pcSelect) {
        showChoice(capPlayerSelect, pcSelect);
        showResults(tie);
        return "tie";
    } else if(capPlayerSelect === "Rock" && pcSelect === "Scissors") {
        playerScore++;
        showChoice(capPlayerSelect, pcSelect)
        showResults(playerWin);
        return "playerWin";
    } else if(capPlayerSelect === "Paper" && pcSelect === "Rock") {
        playerScore++;
        showChoice(capPlayerSelect, pcSelect)
        showResults(playerWin);
        return "playerWin";
    } else if(capPlayerSelect === "Scissors" && pcSelect === "Paper") {
        playerScore++;
        showChoice(capPlayerSelect, pcSelect)
        showResults(playerWin);
        return "playerWin";
    } else {
        pcScore++;
        showChoice(capPlayerSelect, pcSelect)
        showResults(pcWin);
        return "pcWin";
    }
}

// ======= Game Functions =======
// Function to randomise computers choice
function getPCChoice() {
    const pick = ["Rock", "Paper", "Scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

// Function to display game winner of five rounds
function theWinner(roundResult) {
    if(playerScore === 5 || pcScore === 5) {
        document.querySelector("#rock").disabled = true;
        document.querySelector("#paper").disabled = true;
        document.querySelector("#scissors").disabled = true;

        if(roundResult === "playerWin") {
            winner.textContent = "You Beat the PC! You Are The Winner!"; 
            playAgain();   
        } else {
            winner.textContent = "The PC Beat You This Time!";
            playAgain();
        }
    }
}

// Function to play again
function playAgain() {
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again?";
    playButton.appendChild(playAgain);
    playButton.addEventListener("click", () => {
        location.reload();
    })
}

// ======= Helper Functions =======
// Function to capitalise single words
function capitalise(msg) {
    return capsMsg = msg.charAt(0).toUpperCase() + msg.slice(1);
}

// Function to display choices made
function showChoice(playerSelect, pcSelect) {
    playerChose.textContent = "You Chose: " + playerSelect;
    pcChose.textContent = "PC Chose: " + pcSelect;
}

// Function to show round results
function showResults(message) {
    results.textContent = message;
}

// Function to showScore
function showScore() {
    score.textContent = `Your Score: ${playerScore} | PC Score: ${pcScore}`;
}