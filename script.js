"use strict";

let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("Rock, Paper, Scissors?");

const computerSelection = computerPlay();

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomResult = Math.floor(Math.random() * choices.length);
  return choices[randomResult];
}

function playRound(playerSelection) {
  console.log(`user choice => ${playerSelection}`);
  console.log(`computer choice => ${computerSelection}`);
  switch (playerSelection + computerSelection) {
    case "PaperRock":
    case "ScissorsPaper":
    case "RockScissors":
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    case "ScissorsRock":
    case "RockPaper":
    case "PaperScissors":
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    case "ScissorsScissors":
    case "RockRock":
    case "PaperPaper":
      return `You tied! Both chose ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, Scissors?");
    const computerSelection = computerPlay();
    console.log(playerScore++);
    console.log(computerScore++);
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();

function gameOver() {
  if (playerScore === 5 && computerScore < 5) {
    return "You win the game!";
  } else if (playerScore === 5 && computerScore === 5) {
    return "You tied! Try Again!";
  } else return "You lost the game!";
}
console.log(gameOver());
