//the Computer Selection

function getComputerChoice(){ //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
var options = ['rock', 'paper', 'scissors']; //we define the options in an Array
var choice = options[Math.floor(Math.random()*options.length)]; // we random pick one item in the lenght of the array 
return choice;
//console.log("machine pick "  +choice);
}

//hacer una funcion que traiga lo que elije la persona

function getHumanChoice(){
  let h_pick = prompt('what do you choose');
  return h_pick;
}

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
var winner = 0; // numero de veces ganadas
var loser = 0;// numero de veces perdidas
var tie = 0;

//solucion a una partida, da ganador, score y empate. 
function playRound(human, computer){ // it starts picking the two variables
   if (human == 'rock' && computer== 'scissors'){
     winner = winner + 1; // if player won sum 1 to the score
     console.log("you won rock beats scissors");
}else if (human =='scissors' && computer=='rock'){
  loser = loser + 1; // player lose and sum 1 to the score
  console.log('you lose rock beats scissors');
} else if ( human =='scissors' && computer=='paper'){
  winner = winner + 1; // if player won sum 1 to the score
  console.log('you won scissors beats paper');
}else if(human =='paper' && computer=='scissors') {
  loser = loser + 1; // player lose and sum 1 to the score
  console.log('you lose scissors beats paper');
}else if (human =='paper' && computer=='rock'){
  winner = winner + 1; // if player won sum 1 to the score
  console.log('you won paper beats rock');
}else if (human =='rock' && computer=='paper'){
  loser = loser + 1; // if player won sum 1 to the score
  console.log('you lose paper beats rock');
}else{
  tie = tie + 1;
  console.log('its a tie')
}

}

playRound(playerSelection, computerSelection);
console.log(winner, loser);
//console.log(playRound(playerSelection, computerSelection));