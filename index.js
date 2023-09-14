

function getComputerChoice() {
    let computerOptions = ['rock' , 'paper' , 'scissors'];
    let Choice = computerOptions[Math.floor(Math.random() * 3)];
    return Choice;
}

function playRound(playerSelection, computerSelection) {
    let isUserInputCorrect = false;
    let player = playerSelection.toLowerCase();
    if ((playerSelection != 'rock') && (playerSelection != 'paper') && (playerSelection != 'scissors')){
        isUserInputCorrect = true ;
        alert('enter rock or paper or scissors');
        return isUserInputCorrect;
    }
    let theResult = (player == computerSelection) ? "It's a tie" :
                    (((player == 'rock') && (computerSelection == 'paper')) ||
                     ((player == 'paper') && (computerSelection == 'scissors')) ||
                     ((player == 'scissors') && (computerSelection == 'rock'))) ? "You Lose!" :
                     "You Win!";
    return theResult;
}

function game() {
    let roundNum = 0;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++) {
        roundNum += 1;
        console.log("round " + roundNum);
        let askUser = prompt("make a choice");
        let compChoice = getComputerChoice();
        let mainRound = playRound(askUser, compChoice);
        if (mainRound == true) {
            roundNum -= 1;
            i -= 1;
        }
        console.log('compChoice is ' + compChoice);
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