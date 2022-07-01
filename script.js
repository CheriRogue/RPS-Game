"strict mode";

// let userScore = 0;
// let computerScore = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomResult = Math.floor(Math.random() * 3);
  return choices[randomResult];
}

console.log(computerPlay());
