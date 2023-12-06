let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

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
    let result = '';
    if(playerSelection == computerSelection){
        result = 'Tied!';
    }
    else if((playerSelection == 'rock' && computerSelection =='scissor') || 
            (playerSelection == 'scissor' && computerSelection == 'paper') || 
            (playerSelection == 'paper' && computerSelection == 'rock')){
                    result = 'Player wins!';
                    playerScore++;
    }
    else if((playerSelection == 'rock' && computerSelection =='paper') ||
            (playerSelection == 'scissor' && computerSelection == 'rock') || 
            (playerSelection == 'paper' && computerSelection == 'scissor')){
                    result = 'Computer wins!';
                    computerScore++;
    }
    document.getElementById('resultDisplay').innerText = result;
    document.getElementById('scoreDisplay').innerText = `Player: ${playerScore} | Computer ${computerScore} `;

    if(playerScore === winningScore || computerScore === winningScore){
        announceWinner();
    }
}


document.getElementById('rock').addEventListener('click', ()=> {
        playRound('rock', getComputerChoice());
})
document.getElementById('paper').addEventListener('click', ()=>{
        playRound('paper', getComputerChoice());
})
document.getElementById('scissor').addEventListener('click', ()=> {
        playRound('scissor', getComputerChoice());
})

function announceWinner(){
    if(playerScore > computerScore){
        document.getElementById('resultDisplay').innerText = 'Player is winner of the game';
    }
    else{
        document.getElementById('resultDisplay').innerText = 'Computer is winner of the game';
    } 
}