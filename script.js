function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNum = (Math.floor(Math.random() * 3));
    return choices[randomNum];
}

let playerSelection;
let computerSelection;

let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll("button");
const divs = document.querySelectorAll("div");

buttons.forEach((button) => {

    button.addEventListener("click", (e) => {
        switch(e.target.id) {
            case "rock":
                playGame("ROCK");
                break;
            case "paper":
                playGame("PAPER");
                break;
            case "scissors":
                playGame("SCISSORS");
                break;
        };
    })

})

function playRound(playerSelection){

    computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection === "Scissors") {
        playerWins++;
        divs[2].textContent = "You Win! Rock beats Scissors.";
    } else if (playerSelection === "ROCK" && computerSelection === "Paper") {
        computerWins++;
        divs[2].textContent = "You Lose! Paper beats Rock.";
    } else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
        computerWins++;
        divs[2].textContent = "You Lose! Scissors beats Paper."
    } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        playerWins++;
        divs[2].textContent = "You Win! Paper beats Rock.";
    } else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
        playerWins++;
        divs[2].textContent = "You Win! Scissors beats Paper."
    } else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
        computerWins++;
        divs[2].textContent = "You Lose! Rock beats Scissors.";
    } else {
        divs[2].textContent = `It's a Draw. You both chose ${computerSelection}`;
    }
}

function playGame(playerSelection) {

    if (playerWins !== 5 && computerWins !== 5) {
        playRound(playerSelection);
        divs[0].textContent = `Player: ${playerWins}`;
        divs[1].textContent = `Computer: ${computerWins}`;
        isGameOver();
    }

}

function isGameOver() {
    if (playerWins === 5 || computerWins === 5) {
        if (playerWins > computerWins) {
            divs[3].textContent = "Congratulations! You won! Refresh to play again."
        } else {
            divs[3].textContent = "You Lost! Better luck next time! Refresh to play again."
        }
    }
}