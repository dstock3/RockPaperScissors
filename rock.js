console.log("Rock, Paper, Scissors...shoot!");

let userInput = prompt("What do you choose?");
userInput = userInput.toLowerCase();

/* if (userInput == "Rock" || "rock" || "Paper" || "paper" || "Scissors" || "scissors") {
    userInput = prompt("Be serious now! That input is not valid. What do you choose?")
} */

let compInput = (Math.random());

if (compInput  <= .33) {
    compInput = "rock";
    console.log("The computer chooses rock!")
};

if (compInput > .33 && compInput <= .66) {
    compInput = "paper";
    console.log("The computer chooses paper!")
};

if (compInput > .66) {
    compInput = "scissors";
    console.log("The computer chooses scissors!")
};

if (userInput === "rock" && compInput === "paper") {
    console.log('You have chosen rock!')
    console.log("You lose!")
};

if (userInput === "paper" && compInput === "rock") {
    console.log("You have chosen paper!")
    console.log("You win!")
};

if (userInput === "rock" && compInput === "scissors") {
    console.log("You have chosen rock!")
    console.log("You win!")
};

if (userInput === "paper" && compInput === "scissors") {
    console.log("You have chosen paper!")
    console.log("You lose!")
};

if (userInput === "scissors" && compInput === "rock") {
    console.log("You have chosen scissors!")
    console.log("You lose!")
};

if (userInput === "scissors" && compInput === "paper") {
    console.log("You have chosen scissors!")
    console.log("You win!")
};

if (userInput === compInput) {
    console.log(`You have chosen ${userInput}!`)
    console.log("It's a draw!");
};

