let playerScore = 0;
let computerScore = 0;

// computer utga avah
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return 'rock'
        case 1:
            return 'scissor'
        case 2:
            return 'paper'
    }
    console.log(getComputerChoice());
}


function playRound (playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log('Tied!');
    }
    else if((playerSelection == 'rock' && computerSelection =='scissor') || (playerSelection == 'scissor' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock')){
        console.log('Player win');
        playerScore++;
    }
    else if((playerSelection == 'rock' && computerSelection =='paper') || (playerSelection == 'scissor' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'scissor')){
        console.log('Computer win');
        computerScore++;
    }
}

function game(){
    const winningRound = 5;
    let roundCount = 0;
    while(playerScore < winningRound && computerScore < winningRound){
        const playerMove = prompt("What's your move? ").toLowerCase;
        const computerMove = getComputerChoice();
        playRound(playerMove, computerMove);
        roundCount++;
    }
    if(playerScore > computerScore){
        console.log("Player won this tournament after "+roundCount+"");
    } else {
        console.log("Computer won this tournament after "+roundCount+" points")
    }
}

game();