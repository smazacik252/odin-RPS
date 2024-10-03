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
        if (input == "rock" || input == "paper" || input == "scissors") {
            return input;
        } else {
            input = null;
            alert("Not a valid choice");
        }
    }
}

for (let i = 0; i < 10; ++i) {
    console.log(getComputerChoice());
}