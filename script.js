"strict mode";

// let playerScore = 0;
// let computerScore = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomResult = Math.floor(Math.random() * 3);
  return choices[randomResult];
}

// console.log(computerPlay());

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "You Tie!";
  // PLAYER LOSE
  else if (playerSelection === "Rock" && computerSelection === "Paper")
    return "You Lose! Paper beats Rock";
  else if (playerSelection === "Paper" && computerSelection === "Scissors")
    return "You Lose! Scissors beats Paper";
  else if (playerSelection === "Scissors" && computerSelection === "Rock")
    return "You Lose! Rock beats Scissors";
  //PLAYER WINS
  else if (playerSelection === "Paper" && computerSelection === "Rock")
    return "You Win! Paper beats Rock";
  else if (playerSelection === "Scissors" && computerSelection === "Paper")
    return "You Win! Scissors beats Paper";
  else playerSelection === "Rock" && computerSelection === "Scissors";
  return "You Win! Rock beats Scissors";
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));
