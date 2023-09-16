const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const div = document.querySelector('div');


rockButton.addEventListener("click", () => {
  const result = playRound("Rock", getComputerChoice());
  const p = document.createElement('p');
  p.textContent = result;
  div.appendChild(p);
});
paperButton.addEventListener("click", () => {
  const result = playRound("Paper", getComputerChoice());
  const p = document.createElement('p');
  p.textContent = result;
  div.appendChild(p);
});
scissorsButton.addEventListener("click", () => {
  const result = playRound("Scissors", getComputerChoice());
  const p = document.createElement('p');
  p.textContent = result;
  div.appendChild(p);
});

function getComputerChoice() {

  let computerChoice = Math.floor(Math.random() * 3);

  switch(computerChoice)
  {
    case 0:
    return "Rock";
    break;
    case 1:
    return "Paper";
    break;
    case 2:
    return "Scissors";
    break;
    default:
    console.log("Error");
    break;
  }

  return computerChoice;

}

function playRound(playerSelection, computerSelection) {

  function capitalizeFirstLetter(inputString) {
    let firstLetter = inputString.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let capitalizeCase = firstLetter + inputString.slice(1).toLowerCase();
    return capitalizeCase;
  }

  playerSelection = capitalizeFirstLetter(playerSelection);

  if (playerSelection === computerSelection) {
    return "The game is tied!"
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors")) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  else {
    return "Error! Invalid input";
  }

}