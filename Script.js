//This variable will assign a random number from 1 to 9
let randomNumber = Math.floor(Math.random()*9)+1;

// This function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ based on the above random number
function computerPlay(randomNumber) { //nao precisa randomNUmber
    //let result;
    if (randomNumber <= 3) {
        result = 'Rock';
    } else if(randomNumber <= 6) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

//Assigning variables for a single round of Rock Paper Scissors
/*let computerSelection = computerPlay(randomNumber);
let playerSelection2 = prompt('Rock, Paper or Scissors?', '');
let playerSelection = playerSelection2.toUpperCase();*/


//This function plays a single round of Rock Paper Scissors
function play(playerSelection, computerSelection) {
    if ((playerSelection == 'ROCK') && (computerSelection == 'Paper')) {
        return "You Lose! Paper beats Rock";
       }else if((playerSelection == 'ROCK') && (computerSelection == 'Scissors')) {
            return "You Win! Rock beats Scissors";
        }else if((playerSelection == 'ROCK') && (computerSelection == 'Rock')) {
            return "Rock against Rock! Draw!";
        }else if((playerSelection == 'SCISSORS') && (computerSelection == 'Paper')) {
            return "You Win! Scissors beats Paper";
        }else if((playerSelection == 'SCISSORS') && (computerSelection == 'Scissors')) {
            return "Scissors against Scissors! Draw!";
        }else if((playerSelection == 'SCISSORS') && (computerSelection == 'Rock')) {
            return "You Lose! Rock beats Scissors";
        }else if((playerSelection == 'PAPER') && (computerSelection == 'Paper')) {
            return "Paper against Paper! Draw!";
        }else if((playerSelection == 'PAPER') && (computerSelection == 'Scissors')) {
            return "You Lose! Scissors beats Paper";
        }else if((playerSelection == 'PAPER') && (computerSelection == 'Rock')) {
            return "You Win! Paper beats Rock";
        }else {
         return 'You have to insert either Rock, Paper or Scissors to play the game' ;   
       }
}

//This function is equivalent a one round of the game. Terms were done before the creation of playRound.
function playRound(){
        randomNumber = Math.floor(Math.random()*9)+1;
        let computerSelection = computerPlay(randomNumber); //nao precisa randomNumber
        let playerSelection2 = prompt('Rock, Paper or Scissors?', '');
        let playerSelection = playerSelection2.toUpperCase();
        a = play(playerSelection, computerSelection);
        alert(a);
        b = score(); 

}

// This function play 5 rounds of the game. 
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        scoreBoard(b);
    }
};

// Keeping a score and reporting a winner or loser at the end.

playerScore = 0;
computerScore = 0;
tie = 0;
mistake = 0;

function score() {

    if (a == "You Win! Rock beats Scissors") {
        return 'playerScore';}
    else if (a == "You Win! Scissors beats Paper") {
        return 'playerScore'}
    else if (a == "You Win! Paper beats Rock") {
        return 'playerScore';}
    else if (a == "You Lose! Paper beats Rock") {
        return 'computerScore';}
    else if (a == "You Lose! Rock beats Scissors") {
        return 'computerScore';}
    else if (a == "You Lose! Scissors beats Paper") {
        return 'computerScore';}
    else if (a == "Rock against Rock! Draw!") {
        return 'tie';}
    else if (a == "Scissors against Scissors! Draw!") {
        return 'tie'}
    else if (a == "Paper against Paper! Draw!") {
        return 'tie';}
    else if (a == "You have to insert either Rock, Paper or Scissors to play the game") {
        return 'mistake';}
}



function scoreBoard() {
    if(b == 'playerScore') {
        return playerScore = ++playerScore;
    }
    if(b == 'computerScore') {
        return computerScore = ++computerScore;
    }
    if(b == 'tie') {
        return tie = ++tie;
    }
    if(b == 'mistake') {
        return mistake = ++mistake;
    }
}

// call function game
game();

// Call overall winner
function whoIsTheWinner() {
    if (playerScore > (computerScore && tie && mistake)) {
        return 'Congratulations! You Won the game.'
    }
    else if ((tie && playerScore && mistake) < computerScore) {
        return 'Too bad! You lost.'
    }
    else if ((playerScore && computerScore && mistake) < tie) {
        return 'Draw! Maybe you should try again.'
    }
    else if (mistake = 5) {
        return 'Do you even know how to play Rock Paper Scissors?'
    }
}

// Call overall winner
alert(whoIsTheWinner());


// First attempt of 'for'
/* for (let i = 1; i < 5; i++) {
    randomNumber = Math.floor(Math.random()*10);
    computerSelection = computerPlay(randomNumber);
    playerSelection2 = prompt('Rock, Paper or Scissors?', '');
    playerSelection = playerSelection2.toUpperCase();
    play(playerSelection, computerSelection);
    alert(play(playerSelection, computerSelection))
    } */