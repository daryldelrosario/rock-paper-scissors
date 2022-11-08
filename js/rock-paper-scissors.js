function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (computerChoice) {
        case 1:
            return("Rock");
            break;
        case 2:
            return("Paper");
            break;
        case 3:
            return("Scissors");
            break;
        default: 
            return("Experiencing Technical Difficulties");
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("Rock", getComputerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("Paper", getComputerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice);
});

const results = document.querySelector("#results");
function showResults(message) {
    results.textContent = message;
}

function getPlayerChoice() {
    let playerChoice = Math.floor(Math.random() * 3) + 1;

    switch (playerChoice) {
        case 1:
            return("Rock");
            break;
        case 2: 
            return("Paper");
            break;
        case 3:
            return("Scissors");
            break;
        default:
            return("Experiencing Technical Difficulties");
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    let message = "";

    if(playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "Rock":
                message = "Both of you chose Rock, it's a Tie!";
                showResults(message);
                break;
            case "Paper":
                message = "You Lose! Paper beats Rock.";
                showResults(message);
                break;
            case "Scissors":
                message = "You Win! Rock beats Scissors.";
                showResults(message);
                break;
            default:
                console.log("Experiencing Technical Difficulties");
        }
    } else if(playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "Rock":
                message = "You Win! Paper beats Rock.";
                showResults(message);
                break;
            case "Paper":
                message = "Both of you chose Paper, it's a Tie!";
                showResults(message);
                break;
            case "Scissors":
                message = "You Lose! Scissors beats Paper.";
                showResults(message);
                break;
            default:
                console.log("Experiencing Techincal Difficulties");
        }
    } else {
        switch (computerSelection) {
            case "Rock":
                message = "You Lose! Rock beats Scissors.";
                showResults(message);
                break;
            case "Paper":
                message = "You Win! Scissors beats Paper.";
                showResults(message);
                break;
            case "Scissors":
                message = "Both of you chose Scissors, it's a Tie!";
                showResults(message);
                break;
            default:
                console.log("Experiencing Techical Difficulties");
        }
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    /* Removing this logic as instructions in project

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock - Paper - Scissors");
        const computerSelection = getComputerChoice();

        console.log("=======");
        console.log("Round " + (i + 1));
        console.log("=======");

        let msg = playRound(playerSelection, computerSelection);

        if(msg.includes("Win")) {
            playerScore++;
            console.log("Player Chose: " + playerSelection);
            console.log("Computer Chose: " + computerSelection);
            console.log(msg);
            console.log("Score is - " + "Player: " + playerScore + " Computer: " + computerScore);
        } else if(msg.includes("Lose")) {
            computerScore++;
            console.log("Player Chose: " + playerSelection);
            console.log("Computer Chose: " + computerSelection);
            console.log(msg);
            console.log("Score is - " + "Player: " + playerScore + " Computer: " + computerScore);
        } else {
            playerScore++;
            computerScore++;
            console.log("Player Chose: " + playerSelection);
            console.log("Computer Chose: " + computerSelection);
            console.log(msg);
            console.log("Score is - " + "Player: " + playerScore + " Computer: " + computerScore);
        }
    }
    */

    console.log("=======");
    console.log("Player Total Score: " + playerScore);
    console.log("Computer Total Score: " + computerScore);
    console.log("=======");

    if(playerScore > computerScore) {
        console.log("You are the winner!");
    } else if(playerScore < computerScore){
        console.log("The computer beat you this time ...");
    } else {
        console.log("Looks like it's a tie +-");
    }
}
