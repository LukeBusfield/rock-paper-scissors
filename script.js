const playerSelection = prompt("Rock, paper or scissors?");
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
const computerSelection = getComputerSelection();
function playRound(player, com){
    if(com === "rock"){
        switch (player){
            case "rock":
                return "Draw!";
                break;
            case "paper":
                return "You win! Paper beats rock!";
                break;   
            case "scissors":
                return "You lose! Rock beats scissors!";
                break;
            default:
                return "You lose! invalid input!";         
        }
    }    
    if(com === "paper"){
        switch (player){
            case "rock":
                return "You lose! Paper beats rock!";
                break;
            case "paper":
                return "Draw!";
                break;   
            case "scissors":
                return "You win! Scissors beat paper!";
                break;
            default:
                return "You lose! invalid input!";         
        }
    } 
    if(com === "scissors"){
        switch (player){
            case "rock":
                return "You win! Rock beats scissors!";
                break;
            case "paper":
                return "You lose! Scissors beat paper!";
                break;   
            case "scissors":
                return "Draw!";
                break;
            default:
                return "You lose! invalid input!";         
        }
    } 
}    
console.log(playRound(playerSelection.toLowerCase(), computerSelection));