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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

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
