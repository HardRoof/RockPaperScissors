// This function is equivalent a one round of the game
function playRound(e){
	console.log(e.target)
	container.style.visibility = "visible";
  let randomNumber = Math.floor((Math.random()*9)+1);
	let computerSelection = computerPlay(randomNumber);
	let personPlay = e.target.className.toUpperCase()
	comparativeResult = comparative(personPlay, computerSelection); // Call function and assign it to a variable
	insertValue() 
	}

// Use the random Number to assign it to either rock, paper or scissors
function computerPlay(randomNumber) { //nao precisa randomNumber
	if (randomNumber <= 3) {
		return 'Rock';
	}
	else if (randomNumber <= 6 ) { 
		return 'Paper';
	} 
	else {
		return 'Scissors';
	}
}

// Comparing both values
win = 0;
lose = 0;
tie = 0;

function comparative(personPlay, computerSelection){
	if ((personPlay == 'ROCK') && (computerSelection == 'Rock')) {  
		tie = ++tie
		return 'Draw!';
	}
	else if ((personPlay == 'ROCK') && (computerSelection == 'Paper')) { 
		lose = ++lose 
		return 'You lost the round!';
	}
	else if ((personPlay == 'ROCK') && (computerSelection == 'Scissors')) {
		win = ++win  
		return 'You won the round!';
	}
	else if ((personPlay == 'PAPER') && (computerSelection == 'Rock')) { 
		win = ++win 
		return 'You won the round!';
	}
	else if ((personPlay == 'PAPER') && (computerSelection == 'Paper')) {
		tie = ++tie
		return 'Draw!';
	}
	else if ((personPlay == 'PAPER') && (computerSelection == 'Scissors')) { 
		lose = ++lose 
		return 'You lost the round!';
	}
	else if ((personPlay == 'SCISSORS') && (computerSelection == 'Rock')) {  
		lose = ++lose 
		return 'You lost the round!';
	}
	else if ((personPlay =='SCISSORS') && (computerSelection == 'Paper')) {  
		win = ++win 
		return 'You won the round!';
	}
	else if ((personPlay == 'SCISSORS') && (computerSelection == 'Scissors')) {  
		tie = ++tie
		return 'Draw!';
	}
	else {
		return 'You have to press either Rock, Paper or Scissors.'
	}
}

//UI part
//Importing buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const options = document.getElementById("options")
const btn = document.querySelectorAll('button')

//Importing textScore, scoreboard, and container from JS
const text = document.getElementById("textScore");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const container = document.getElementById("container")
//const text = document.createElement('div') // Would be interesting to use this inside insertValue(), if would like to keep a historic of action, by create a new div ein every click 


//Assign value to imported divs, disables the button, triggers the function to play again, and return final text. 
function insertValue() {
text.textContent = comparativeResult
playerScore.textContent = "Player score:" +" "+ win
computerScore.textContent = "Computer score:" +" "+ lose

if (win == 5) {
	btn.forEach((button) => {  //To remove a handler we should pass exactly the same function as was assigned.
		button.removeEventListener('click', playRound); //Could've used disable button command, as well.
	});
	playAgain() 
	return text.textContent = 'Congratulations! You won the game.'
}
if (lose == 5) {
	btn.forEach((button) => {
		button.removeEventListener('click', playRound);
	});
	playAgain() 
	return text.textContent = 'Too bad! You lost the game. Better luck next time.'
	}
};

//Creates two divs to play the game again
const again = document.createElement('div');
const restartBtn = document.createElement("button");
// adds class to new button
 restartBtn.classList.add('classRestartBtn'); 
 restartBtn.textContent = "Play again!"                                     


function playAgain() {
	container.appendChild(again);
	again.appendChild(restartBtn);

	restartBtn.addEventListener('click', gameRestart)			
}

//Function triggered by reset button. It restores the original state of the game
function gameRestart() {
	win = 0;
	lose = 0;
	tie = 0;
	container.style.visibility = "hidden";
	btn.forEach((button) => {
		button.addEventListener('click', playRound);
	});
}

//First command of program
//btn is an array-like. We use .forEach to make addEventListener loop through all buttons
btn.forEach((button) => {
  button.addEventListener('click', playRound);
});

