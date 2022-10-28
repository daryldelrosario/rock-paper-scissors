function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (computerChoice) {
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissors");
            break;
        default: 
            console.log("Experiencing Technical Difficulties");
    }
}

function loopPCChoice(no) {
    for(let i = 0; i <= no; i++ ) {
        getComputerChoice();
    }
}