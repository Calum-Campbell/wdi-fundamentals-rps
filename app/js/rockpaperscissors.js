
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // OR statement that takes move otherwise takes getInput
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //OR statement that takes move other wise takes randomPlay
    return move || randomPlay()
}

// Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
// Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
// The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
/* YOUR CODE HERE */

//Else if statements used to differentiate 'tie', player win and computer wins scenerios
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
        winner = 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    
    
    //return winner at end of function
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner(playerWins, computerWins);
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    //continue looping until either player or computer have more than 5 wins
    while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        
        if (winner === 'player') {
            playerWins ++;
        }
        else if (winner === 'computer') {
            computerWins ++;
        }
        else if (winner =='tie'){
            playerWins += 0;
            computerWins +=0;
        }
        
        //console.log comments for game
        console.log('The Player chose: ' + playerMove);
        console.log('The computer chose: ' + computerMove);
        console.log('The score is currently, PLayer: ' +playerWins + ', Comuter: ' +computerWins + '\n');}
    
    console.log('The winner is ' + winner);
    return [playerWins, computerWins];
}



playToFive();