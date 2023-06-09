let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
function getComputerSelection(){
    const r = Math.random();
    if(r >= 2/3){
        return "rock";
    }else if(r >= 1/3){
        return "paper";
    }else{
        return "scissors";
    }
}
function playRound(player, com){
    if(com === "rock"){
        switch (player){
            case "rock":
                return "Draw!";
                break;
            case "paper":
                playerWins++;
                return "You win! Paper beats rock!";
                break;   
            case "scissors":
                computerWins++;
                return "You lose! Rock beats scissors!";
                break;
            default:
                computerWins++;
                return "You lose! invalid input!";         
        }
    }    
    else if(com === "paper"){
        switch (player){
            case "rock":
                computerWins++;
                return "You lose! Paper beats rock!";
                break;
            case "paper":
                return "Draw!";
                break;   
            case "scissors":
                playerWins++;
                return "You win! Scissors beat paper!";
                break;
            default:
                computerWins++;
                return "You lose! invalid input!";         
        }
    } 
    else{
        switch (player){
            case "rock":
                playerWins++;
                return "You win! Rock beats scissors!";
                break;
            case "paper":
                computerWins++;
                return "You lose! Scissors beat paper!";
                break;   
            case "scissors":
                return "Draw!";
                break;
            default:
                computerWins++;
                return "You lose! invalid input!";         
        }
    } 
}
for(let i = 0; i < 5; i++){
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = getComputerSelection();    
    console.log(playRound(playerSelection.toLowerCase(), computerSelection) + " " + playerWins + " : " + computerWins);
}
if(playerWins < computerWins){
    console.log("You lost!" + " " + playerWins + " : " + computerWins);
}
else if(playerWins > computerWins){
    console.log("You won!" + " " + playerWins + " : " + computerWins);
}
else if(playerWins === computerWins){
    console.log("It’s a draw!" + " " +  playerWins + " : " + computerWins);
}