
// function to get computer choice
function getComputerChoice() {
    let computerOptions = ['rock' , 'paper' , 'scissors'];
    let Choice = computerOptions[Math.floor(Math.random() * 3)];
    return Choice;
}


// function to compare player and computer selection
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    let theResult = (playerSelection == computerSelection) ? "It's a tie" :
                    (((playerSelection == 'rock') && (computerSelection == 'paper')) ||
                     ((playerSelection == 'paper') && (computerSelection == 'scissors')) ||
                     ((playerSelection == 'scissors') && (computerSelection == 'rock'))) ? "You Lose!" :
                     "You Win!";
    return theResult;
}

// variables that are used for iteration and to update scores
let roundNum = 1;
let playerScore = 0;
let computerScore = 0;
let i = 0;
let removal = 0;

//  query selectors
let theRounds = document.querySelector('#rounds');
let Goodluck = document.querySelector('#goodLuck');
let theRoundNum = document.querySelector('#roundNum');
let theComputerChoice = document.querySelector('#computerChoice');
let thePlayerScore = document.querySelector('#playerScore');
let theComputerScore = document.querySelector('#computerScore');
let tie = document.querySelector('#tie');
let theResult = document.querySelector('#result');


// this runs when a button is clicked
let buttons = document.querySelectorAll(".button");
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        theId = btn.textContent;
        console.log(theId);
        game(); 
    })
});





// main gameplay
function game() {
    tie.textContent = ('');
    if (i < 5) {
        if (roundNum < 5) {
            roundNum ++; 
        }
        i++;
        removal++;
        
        theRoundNum.textContent = ("Round " +     roundNum);
        
        let compChoice = getComputerChoice();
        
        
        theComputerChoice.textContent = ('Computer Choice is ' + compChoice);
        let mainRound = playRound(theId, compChoice); 

        // who wins each round
        
        if (mainRound == "You Win!") {
            playerScore += 1;
            thePlayerScore.textContent = ('Your score is ' + playerScore);
            theComputerScore.textContent = ('Computer score is ' + computerScore);
        }
        else if (mainRound == "You Lose!") {
            computerScore += 1;
            thePlayerScore.textContent = ('Player score is ' + playerScore);
            theComputerScore.textContent = ('Computer score is ' + computerScore);
        }
        else {
            thePlayerScore.textContent = ('Player score is ' + playerScore);
            theComputerScore.textContent = ('Computer score is ' + computerScore);
            tie.textContent = ('You chose the same thing as Computer');
        }
    }
        // the final winner is announced
    if (i == 5) {   
        removal++;
        if (playerScore > computerScore) {
            theResult.textContent = ("You are the Winner");
        }
        else if (computerScore > playerScore) {
            theResult.textContent = ("Computer wins");
        }
        else {
            theResult.textContent = ("It's a draw");
        } 
        theRounds.textContent = "GAME OVER";
        theRounds.style.color = 'red';
        Goodluck.textContent = "Click on refresh";
    }
    if (removal == 7) {
        theComputerChoice.textContent = ('');
    }
        
}

let refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
    console.clear();
    roundNum = 0;
    playerScore = 0;
    computerScore = 0;
    i = 0;
    removal = 0;
    theRoundNum.textContent = ("Round 1");
    theComputerChoice.textContent = ('');
    theResult.textContent = ('');
    thePlayerScore.textContent = ('Player score is ' + playerScore);
    theComputerScore.textContent = ('Computer score is ' + computerScore);
    theRounds.textContent = "You have 5 rounds";
    theRounds.style.color = 'black';
    Goodluck.textContent = "Goodluck";
    tie.textContent = ('');
}) ;

