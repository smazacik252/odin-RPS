console.log("Skap");

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

for (let i = 0; i < 10; ++i) {
    console.log(getComputerChoice());
}