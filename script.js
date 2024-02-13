// User enters their choice: Rock, Paper or Scissors
    // Use a prompt method for this

// Create a function to get random choice from [Rock, Paper, Scissors]
// to assign it as the computer's choice
    // Create an array containing the three choices
    // Create a new variable and assign it a random number from 1 to 3
    // Get the computer's choice by using the random number as the index for the array
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNum = (Math.floor(Math.random() * 3));
    return choices[randomNum];
}

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock

// Create a new function to play the game
    // Get player's and computer's choices and use an if-else statments
    // to compare them to get their winner
    // Use logical operators to check the winner of the round
        // Players choose Rock and Computer choose Scissors
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection){

    playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "ROCK" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === computerSelection.toUpperCase()) {
        return `It's a Draw. You both chose ${computerSelection}`;
    } else {
        return "Please enter your choice correctly.";
    }
} 
    
    // Create two new variable to track player's wins and losses
        // Increment the relevant variable after each round
    // In the end compare these two value to declare the winner

// This is a 5 round game
// Create another function and keep the track of the rounds played
    // Create a new variable to store the number of rounds
    // Call the above function inside this function to play a round
    // Use a for loop to call the function until the rounds equal to 5

function playGame() {

    let rounds = 5;

    for (let i=0; i < rounds; i++) {
        console.log(playRound());
    }

}
