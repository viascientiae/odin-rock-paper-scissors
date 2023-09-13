function getComputerChoice() {

  let computerChoice = Math.floor(Math.random() * 3);


  switch(computerChoice)
  {
    case 0:
    computerChoice = "Rock";
    break;
    case 1:
    computerChoice = "Paper";
    break;
    case 2:
    computerChoice = "Scissors";
    break;
    default:
    console.log("Error");
    break;
  }

  return computerChoice;

}

let playRoundResult = 0;

function playRound(playerSelection, computerSelection) {

  function capitalizeFirstLetter(inputString) {
    let firstLetter = inputString.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let capitalizeCase = firstLetter + inputString.slice(1).toLowerCase();
    return capitalizeCase;
  }

  playerSelection = capitalizeFirstLetter(playerSelection);

  if (playerSelection === computerSelection) {
    playRoundResult = 0;
    return "The game is tied!"
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    playRoundResult = 1;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  }
  else if ((playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors")) {
    playRoundResult = -1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  else {
    return "Error! Invalid input";
  }

}