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


let userInput = prompt("What do you choose?");
userInput = userInput.toLowerCase();

/* if (userInput == "Rock" || "rock" || "Paper" || "paper" || "Scissors" || "scissors") {
    userInput = prompt("Be serious now! That input is not valid. What do you choose?")
} */




if (userInput === "rock" && compInput === "paper") {
    console.log('You have chosen rock!')
    console.log("You lose! Paper covers rock.")
};

if (userInput === "paper" && compInput === "rock") {
    console.log("You have chosen paper!")
    console.log("You win! Paper covers rock.")
};

if (userInput === "rock" && compInput === "scissors") {
    console.log("You have chosen rock!")
    console.log("You win! Rock beats scissors.")
};

if (userInput === "paper" && compInput === "scissors") {
    console.log("You have chosen paper!")
    console.log("You lose! Scissors cuts paper.")
};

if (userInput === "scissors" && compInput === "rock") {
    console.log("You have chosen scissors!")
    console.log("You lose! Rock beats scissors.")
};

if (userInput === "scissors" && compInput === "paper") {
    console.log("You have chosen scissors!")
    console.log("You win! Scissors cuts paper.")
};

if (userInput === compInput) {
    console.log(`You have chosen ${userInput}!`)
    console.log("It's a draw!");
};

