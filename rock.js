console.log("Rock, Paper, Scissors...shoot!");

function computerPlay() {
    let computerSelection = (Math.random());

    if (computerSelection  <= .33) {
        computerSelection = "rock";
        console.log("The computer chooses rock!")
    };

    if (computerSelection > .33 && computerSelection <= .66) {
        computerSelection = "paper";
        console.log("The computer chooses paper!")
    };

    if (computerSelection > .66) {
        computerSelection = "scissors";
        console.log("The computer chooses scissors!")
    };
    return computerSelection;
};

let playerSelection = prompt("What do you choose?");
playerSelection = playerSelection.toLowerCase();

/* if (userInput == "Rock" || "rock" || "Paper" || "paper" || "Scissors" || "scissors") {
    userInput = prompt("Be serious now! That input is not valid. What do you choose?")
} */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log('You have chosen rock!')
        console.log("You lose! Paper covers rock.")
    };
    
    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You have chosen paper!")
        console.log("You win! Paper covers rock.")
    };
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You have chosen rock!")
        console.log("You win! Rock beats scissors.")
    };
    
    if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You have chosen paper!")
        console.log("You lose! Scissors cuts paper.")
    };
    
    if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You have chosen scissors!")
        console.log("You lose! Rock beats scissors.")
    };
    
    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You have chosen scissors!")
        console.log("You win! Scissors cuts paper.")
    };
    
    if (playerSelection === computerSelection) {
        console.log(`You have chosen ${playerSelection}!`)
        console.log("It's a draw!");
    };
}

playRound(playerSelection, computerPlay());



