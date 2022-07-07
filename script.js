"use strict";

// // let playerScore = 0;
// // let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

let playerSelection = "Rock";
const computerSelection = computerPlay();

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomResult = Math.floor(Math.random() * choices.length);
  return choices[randomResult];
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
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

function game() {
  return playRound(playerSelection, computerSelection);
}

console.log(game());

// // // function game() {
// // //   for (let i = 0; i < 5; i++) {}
// // // }
