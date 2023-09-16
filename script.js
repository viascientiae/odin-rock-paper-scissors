let playerTally = 0;
let computerTally = 0;

const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const div = document.querySelector('div');


rockButton.addEventListener("click", () => {
  const result = playRound("Rock", getComputerChoice());
  const p = document.createElement('p');
  p.textContent = result;
  div.appendChild(p);
  announceWinner ()
});
paperButton.addEventListener("click", () => {
  const result = playRound("Paper", getComputerChoice());
  const p = document.createElement('p');
  p.textContent = result;
  div.appendChild(p);
  announceWinner ()
});
scissorsButton.addEventListener("click", () => {
  const result = playRound("Scissors", getComputerChoice());
  const p = document.createElement('p');
  p.textContent = result;
  div.appendChild(p);
  announceWinner ()
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

function announceWinner () {
  if (playerTally === 5) {
    const p = document.createElement('p');
    p.textContent = `Congratulations! You have won the game with 5 points first. Computer's score is: ${computerTally}. The game tally will now be reset.`;
    div.appendChild(p);
    playerTally = 0;
    computerTally = 0;
  }
  else if (computerTally === 5) {
    const p = document.createElement('p');
    p.textContent = `Better luck next time! The Computer has won the game with 5 points first. Your score is: ${playerTally}. The game tally will now be reset.`;
    div.appendChild(p);
    playerTally = 0;
    computerTally = 0;
  }
  else {
    
  }
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
    playerTally += 0;
    computerTally += 0;
    return `The game is tied! Both you and the computer moved ${playerSelection}. \n The running score is: You: ${playerTally} and Computer: ${computerTally}`;
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    playerTally += 1;
    return `You won! You moved ${playerSelection}, which beats computer's ${computerSelection}. \n The running score is: You: ${playerTally} and Computer: ${computerTally}`;
  }
  else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors")) {
    computerTally += 1;
    return `You lose! You moved ${computerSelection}, which is beaten by computer's ${playerSelection}. \n The running score is: You: ${playerTally} and Computer: ${computerTally}`;
  }
  else {
    return "Error! Invalid input";
  }

}