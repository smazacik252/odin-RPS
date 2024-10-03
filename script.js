let humanScore = 0;
let computerScore = 0;
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    switch(humanChoice) {
        case "rock":
            if (computerChoice == "scissors") {
                ++humanScore;
                console.log("Human won");
            } else if (computerChoice = "rock") {
                console.log("draw");
            } else {
                ++computerScore;
                console.log("Computer won");
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                ++humanScore;
                console.log("Human won");
            } else if (computerChoice == "paper") {
                console.log("draw");
            } else {
                ++computerScore;
                console.log("Computer won");
            }
            break;
        case "scissors":
            if (computerChoice == "paper") {
                ++humanScore;
                console.log("Human won");
            } else if (computerChoice == "scissors") {
                console.log("draw");
            } else {
                ++computerScore;
                console.log("Computer won");
            }
    }
}

function getComputerChoice() {
    let generated = Math.random();
    if (generated < 0.33) {
        return "rock";
    } else if (generated < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = null;
    while (input == null) {
        input = prompt("Please enter your choice of rock,paper or scissors:");
        input = input.toLowerCase();
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        } else {
            input = null;
            alert("Not a valid choice");
        }
    }
}

