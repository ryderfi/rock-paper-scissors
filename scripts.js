function computerPlay() {
    let gameOptions = ["Rock", "Paper", "Scissors"]
    return gameOptions[Math.floor((Math.random() * gameOptions.length))]
}

function playRound(playerSelection, computerSelection) {
    let selectionFormat = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (selectionFormat === "Rock" && computerSelection === "Paper") {
        return "Computer Wins";
        console.log("You Lose, imbecile. Paper beats rock.");
    }
    else if (selectionFormat === "Rock" && computerSelection === "Scissors") {
        return "Player Wins";
        console.log("You Win, winner. Rock crushes scissors.");
    }
    else if (selectionFormat === "Rock" && computerSelection === "Rock") {
        return "Tie";
        console.log("It's a tie!");
    }
    else if (selectionFormat === "Paper" && computerSelection === "Scissors") {
        return "Computer Wins";
        console.log("You Lose, idiot. Scissors cut paper.");
    }
    else if (selectionFormat === "Paper" && computerSelection === "Rock") {
        return "Player Wins";
        console.log("You Win,champ. Paper covers rock.");
    }
    else if (selectionFormat === "Paper" && computerSelection === "Paper") {
        return "Tie";
        console.log("It's a tie!");
    }
    else if (selectionFormat === "Scissors" && computerSelection === "Paper") {
        return "Player Wins";
        console.log("You Win, GOAT. Scissors cut paper.");
    }
    else if (selectionFormat === "Scissors" && computerSelection === "Rock") {
        return "Computer Wins";
        console.log("You Lose, loser. Rock crushes scissors.");
    }
    else if (selectionFormat === "Scissors" && computerSelection === "Scissors") {
        return "Tie";
        console.log("It's a tie!");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = window.prompt("Rock, Paper, or Scissors");
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        if (result === "Computer Wins") {
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}. Your Score: ${playerScore}. Computer Score: ${computerScore}.`)    
        }
        else if (result === "Player Wins") {
            playerScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}. Your Score: ${playerScore}. Computer Score: ${computerScore}.`)  
        }
        else if (result === undefined) {
            console.log("You mispelled something you idiot. Botched it.")
        }
        else {
            console.log(`It was a tie. You both suck. Your Score: ${playerScore}. Computer Score: ${computerScore}.`)
        }
    }
    
    if (playerScore > computerScore) {
        console.log(`WINNER! You're literally the GOAT. Final score: ${playerScore} to ${computerScore}. Get rekt, bot`)
    } 
    else if (playerScore < computerScore) {
        console.log(`LOSER! Woooow. You're literally dogwater? Final score: ${playerScore} to ${computerScore}. Fat L.`)
    }
    else {
        console.log(`TIE??? Y'all really tied at ${playerScore} to ${computerScore}. Guess you'll have to play again.`)
    }
}

game()