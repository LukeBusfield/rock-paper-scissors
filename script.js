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
document.addEventListener("DOMContentLoaded", function(){
  const playerWinsDisplay = document.getElementById("playerWinsDiv");
  const computerWinsDisplay = document.getElementById("computerWinsDiv");
  const result = document.getElementById("result");

  let rock = document.getElementById("rock");
  rock.addEventListener("click", function() {
    playAndUpdate("rock", getComputerSelection());
  });

  let paper = document.getElementById("paper");
  paper.addEventListener("click", function() {
    playAndUpdate("paper", getComputerSelection());
  });

  let scissors = document.getElementById("scissors");
  scissors.addEventListener("click", function() {
    playAndUpdate("scissors", getComputerSelection());
  });

  let reset = document.getElementById("reset");
  reset.addEventListener("click", function(){
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playerWins = 0;
    computerWins = 0;
    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;
    result.textContent = "";
  });

  function playAndUpdate(player, com){
    let s = playRound(player, com)
    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;
    if(playerWins === 5){
      result.textContent = "You won!";
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }else if(computerWins === 5){
      result.textContent = "You lost!";
      rock.disabled = true;
      paper.disabled = true;
      scissors.disabled = true;
    }else{
      result.textContent = s;
    }
  }
})
