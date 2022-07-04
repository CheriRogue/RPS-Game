"strict mode";

// let playerScore = 0;
// let computerScore = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomResult = Math.floor(Math.random() * choices.length);
  return choices[randomResult];
}

// console.log(computerPlay());

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "You Tie!";
  else if (playerSelection === "Paper" && computerSelection === "Rock")
    return "You Win! Paper beats Rock";
  else if (playerSelection === "Scissors" && computerSelection === "Paper")
    return "You Win! Scissors beats Paper";
  else if (playerSelection === "Rock" && computerSelection === "Scissors")
    return "You Win! Rock beats Scissors";
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let playerSelection = prompt("Choose Rock, Paper or Scissors to begin!");
playerSelection = playerSelection.toLowerCase();
const computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {}
}
