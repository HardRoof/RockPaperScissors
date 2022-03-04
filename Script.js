// Create a Random Number
//let randomNumber = Math.floor((Math.random()*9)+1);

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

// Assign variable to function 
// let computerSelection = computerPlay();

// Create input of player
// let personPlayRaw = prompt ('Rock, Paper or Scissors?', '');
// let personPlay = personPlayRaw.toUpperCase();


function comparative(personPlay, computerSelection){
    if ((personPlay == 'ROCK') && (computerSelection == 'Rock')) {  
        return 'Draw!';
    }
    else if ((personPlay == 'ROCK') && (computerSelection == 'Paper')) {  
        return 'You lost the round!';
    }
    else if ((personPlay == 'ROCK') && (computerSelection == 'Scissors')) {  
        return 'You won the round!';
    }
    else if ((personPlay == 'PAPER') && (computerSelection == 'Rock')) {  
        return 'You won the round!';
    }
    else if ((personPlay == 'PAPER') && (computerSelection == 'Paper')) {  
        return 'Draw!';
    }
    else if ((personPlay == 'PAPER') && (computerSelection == 'Scissors')) {  
        return 'You lost the round!';
    }
    else if ((personPlay == 'SCISSORS') && (computerSelection == 'Rock')) {  
        return 'You lost the round!';
    }
    else if ((personPlay =='SCISSORS') && (computerSelection == 'Paper')) {  
        return 'You won the round!';
    }
    else if ((personPlay == 'SCISSORS') && (computerSelection == 'Scissors')) {  
        return 'Draw!';
    }
    else {
        return 'You have to insert either Rock, Paper or Scissors.'
    }
}

// This function is equivalent a one round of the game
function oneRound(){
    let randomNumber = Math.floor((Math.random()*9)+1);
    let computerSelection = computerPlay(randomNumber); //nao precisa randomNumber
    let personPlayRaw = prompt ('Rock, Paper or Scissors?', '');
    let personPlay = personPlayRaw.toUpperCase();
    a = comparative(personPlay, computerSelection); // Call function and assign it to a variable
    alert(a); // 
    b = eachScore(); // Call function and assign it to a variable
}

// This function will run oneRound() 5 times

function fiveRounds() {
    for (let i = 0; i < 5; i++) {
        oneRound();
    }
}

//this function will score points of each round 

win = 0;
lose = 0;
tie = 0;
nonsense = 0;

function eachScore() {
    if (a == 'You won the round!') {  
        return win = ++win;
    }
    else if (a == 'You lost the round!') {  
        return lose = ++lose;
    }
    else if (a == 'Draw!') {  
        return tie = ++tie;
    }
    else if (a == 'You have to insert either Rock, Paper or Scissors.') {  
        return nonsense = ++nonsense;
    }
}

function finalScore (){
    if (win > lose) { 
    return 'Congratulations! You Won the game.'
    }
    if (lose > win) { 
        return 'Too bad! You lost.'
    }
    if (nonsense == 5){  
        return 'Do you even know how to play Rock Paper Scissors?'
    }
    if ((lose == win) || (tie = 5)){ 
        return 'Draw! Better luck next time.'
    }
}

fiveRounds();
alert(finalScore(win, lose, tie, nonsense));
