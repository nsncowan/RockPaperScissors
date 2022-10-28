const getUserChoice = userInput => { 
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  }
  else (console.log('please enter a valid submission'));
};

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie game';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer wins'
    }
    else {
      return 'user wins'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer wins'
    }
    else {
      return 'user wins'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer wins'
    }
    else {
      return 'user wins'
    }
  }
} 

function playGame() {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('you threw ' + userChoice);
  console.log('the computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

