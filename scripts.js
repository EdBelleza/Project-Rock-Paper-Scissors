const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

function getComputerChoice() {
  const computerHands = ["rock", "paper", "scissors"];
  const computerChoice =
    computerHands[Math.floor(Math.random() * computerHands.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = `It's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win!`;
  } else {
    result = `You lose`;
  }
  console.log(result);
  return result;
}
let userScore = 0;
let computerScore = 0;

function game() {
  const result = playRound(getUserChoice(), getComputerChoice());

  if (result === `You win!`) {
    userScore++;
  } else if (result === `You lose`) {
    computerScore++;
  }

  if (userScore === 5 || computerScore === 5) {
    if (userScore > computerScore) {
      return alert(
        `You won against the computer. Your score is ${userScore} while the computer has ${computerScore}`
      );
    } else if (userScore < computerScore) {
      return alert(
        `You lost against the computer. Your score is ${userScore} while the computer has ${computerScore}`
      );
    }
  }
}
