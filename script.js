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

function game() {
  let playRoundReturn;
  let tally = 0;
  
  for(i = 0; i < 5; i++)
  {
    playRoundReturn = playRound(prompt("Play your move! Rock, Paper or Scissors?"), getComputerChoice());

    if (playRoundResult === 0) {
      tally = tally + 0;
    }
    else if (playRoundResult === 1) {
      tally = tally + 1;
    }
    else if (playRoundReturn === -1) {
      tally = tally + 0;
    }

    console.log(playRoundReturn);
  
  }

  if(tally >=3) {
    return `You've won the game! You won ${tally} rounds!`;
  }
  else {
    return `You've lost the game. You won only ${tally} rounds!`;
  }
}

console.log(game());