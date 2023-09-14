
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let computerOptions = ['rock' , 'paper' , 'scissors'];
    let Choice = computerOptions[Math.floor(Math.random() * 3)];
    return Choice;
}

function playRound(playerSelection, computerSelection) {
    
    let player = playerSelection.toLowerCase();
    if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')){
        alert('enter rock or paper or scissors');
    }
    let theResult = (player == computerSelection) ? "It's a tie" :
                    (((player == 'rock') && (computerSelection == 'paper')) ||
                     ((player == 'paper') && (computerSelection ='scissors')) ||
                     ((player == 'scissors') && (computerSelection == 'rock'))) ? "You Lose!" :
                     "You Win!";
    return theResult;
}

function game() {

    for (let i = 0; i<5; i++) {
        roundNum += 1;
        console.log("round " + roundNum);
        let askUser = prompt("make a choice", "rock");
        let compChoice = getComputerChoice();
        console.log('compChoice is ' + compChoice);
        let mainRound = playRound(askUser, compChoice);
        if (mainRound == "You Win!") {
            playerScore += 1;
            console.log('player score is ' + playerScore);
        }
            else if (mainRound == "You Lose!") {
                computerScore += 1;
                console.log('computer score is ' + computerScore)
            }
            else {
                console.log("It's a tie");
            }
    }
    if (playerScore > computerScore) {
        console.log("You Win");
    }
        else if (computerScore > playerScore) {
            console.log("Computer wins")
        }
        else {
            console.log("It's a draw");
        }
}