let playerWin = 0;
let computerWin = 0;

function game() {
    let playerSelection = prompt("What do you choose?");
    playerSelection = playerSelection.toLowerCase();

    function computerPlay() {
        console.log("Rock, Paper, Scissors...shoot!");
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
    
    let computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === "rock" && computerSelection === "paper") {
            console.log('You have chosen rock!')
            console.log("You lose! Paper covers rock.");
            return computerWin = ++computerWin;
        };
        
        if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You have chosen paper!")
            console.log("You win! Paper covers rock.");
            return playerWin = ++playerWin;
        };
        
        if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You have chosen rock!")
            console.log("You win! Rock beats scissors.");
            return playerWin = ++playerWin;
        };
        
        if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You have chosen paper!")
            console.log("You lose! Scissors cuts paper.");
            return computerWin = ++computerWin;
        };
        
        if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You have chosen scissors!")
            console.log("You lose! Rock beats scissors.");
            return computerWin = ++computerWin;
        };
        
        if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You have chosen scissors!")
            console.log("You win! Scissors cuts paper.");
            return playerWin = ++playerWin;
        };
        
        if (playerSelection === computerSelection) {
            console.log(`You have chosen ${playerSelection}!`)
            console.log("It's a draw!");
        };
    }

    playRound(playerSelection, computerSelection);
    console.log("Player: " + playerWin);
    console.log("Computer: " + computerWin);
    return playerWin, computerWin;
};

game();
game();
game();
game();
game();

if (playerWin > computerWin) {
    console.log("You have won the game!")
};

if (playerWin < computerWin) {
    console.log("The computer won. Try again!")
};

