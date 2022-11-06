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
    let message = "";

    if(playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "Rock":
                return message = "Both of you chose Rock, it's a Tie!";
                break;
            case "Paper":
                return message = "You Lose! Paper beats Rock.";
                break;
            case "Scissors":
                return message = "You Win! Rock beats Scissors.";
                break;
            default:
                return("Experiencing Technical Difficulties");
        }
    } else if(playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "Rock":
                return message = "You Win! Paper beats Rock.";
                break;
            case "Paper":
                return message = "Both of you chose Paper, it's a Tie!";
                break;
            case "Scissors":
                return message = "You Lose! Scissors beats Paper.";
                break;
            default:
                return("Experiencing Techincal Difficulties");
        }
    } else {
        switch (computerSelection) {
            case "Rock":
                return message = "You Lose! Rock beats Scissors.";
                break;
            case "Paper":
                return message = "You Win! Scissors beats Paper.";
                break;
            case "Scissors":
                return message = "Both of you chose Scissors, it's a Tie!";
                break;
            default:
                return("Experiencing Techical Difficulties");
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
