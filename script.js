//the Computer Selection

function getComputerChoice(){ //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
var options = ['rock', 'paper', 'scissors']; //we define the options in an Array
var choice = options[Math.floor(Math.random()*options.length)]; // we random pick one item in the lenght of the array 
return choice;
//console.log("machine pick "  +choice);
}
 


//logica del juego humano vs computadora
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
  console.log('its a tie');
}
}

/*
function getHumanChoice(){
hpick = prompt('what do you choose?');
return hpick;
}
*/

//variables

const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();
var round = 0;
var winner = 0;
var  loser = 0;
var  tie = 0;
/*
funcion para hacer las 5 primeras rondas 
function game (){
for (let round = 0; round < 5; round++) {
const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
}
console.log('numero de partidas ganadas '+ winner);
console.log('numero de partidas perdidas '+ loser);
console.log('numero de partidas empatadas '+ tie);
}
//game();
*/
