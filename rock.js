console.log("Rock, Paper, Scissors...shoot!");

let userInput = prompt("What do you choose?");

/* if (userInput == "Rock" || "rock" || "Paper" || "paper" || "Scissors" || "scissors") {
    userInput = prompt("Be serious now! That input is not valid. What do you choose?")
} */

let compInput = (Math.random());

if (compInput  <= .33) {
    compInput = "Rock";
    console.log("The computer chooses Rock!")
};

if (compInput > .33 && compInput <= .66) {
    compInput = "Paper";
    console.log("The computer chooses Paper!")
};

if (compInput > .66) {
    compInput = "Scissors";
    console.log("The computer chooses Scissors!")
};

if (userInput === compInput) {
    console.log("It's a draw!");
};

if (userInput === "Rock" && compInput === "Paper") {
    console.log('You have chosen Rock!')
    console.log("You lose!")
};

if (userInput === "Paper" && compInput === "Rock") {
    console.log("You have chosen Paper!")
    console.log("You win!")
};

if (userInput === "Rock" && compInput === "Scissors") {
    console.log("You have chosen Rock!")
    console.log("You win!")
};

if (userInput === "Paper" && compInput === "Scissors") {
    console.log("You have chosen Paper!")
    console.log("You lose!")
};

if (userInput === "Scissors" && compInput === "Rock") {
    console.log("You have chosen Scissors!")
    console.log("You lose!")
};

if (userInput === "Scissors" && compInput === "Paper") {
    console.log("You have chosen Scissors!")
    console.log("You win!")
};

