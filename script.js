'use strict'

console.log('si lees esto estas trabajando con el archivo correctamente');


/*we need to do one game
//rock scisors and paper

Your game is going to play against the computer, 
so begin with a function called getComputerChoice that
 will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
 We’ll use this function in the game to make the computer’s play. 
 Tip: use the console to make sure this is returning 
 the expected output before moving to the next step!

Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - 
the playerSelection and computerSelection - 
and then return a string that declares 
the winner of the round like so: "You Lose! Paper beats Rock"

Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation).

Important note: you want to return the results of this function call, 
not console.log() them. You’re going to use what you return later on, 
so let’s test this function by using console.log to see the results:
*/
/*
var myArray = [
  "Apples",
  "Bananas",
  "Pears"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

document.body.innerHTML = randomItem;

*/

function getComputerChoice(){ //will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
var options = ['Rock', 'Paper', 'Scissors']; //we define the options in an Array
var choice = options[Math.floor(Math.random()*options.length)]; // we random pick one item in the lenght of the array 

//console.log(choice);
}




function playRound(playerSelection, computerSelection) { 
  /*if (playerSelection === 'rock' && computerSelection === 'Paper'){
    console.log(result);
}                  
    */
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  // const result = "you lose" + playerSelection + "beats" + computerSelection; revisar en casa 
  console.log(playRound(playerSelection, computerSelection));


  /*
  Write a NEW function called game(). 
  Call the playRound function inside of this one to play a 5 round game 
  that keeps score and reports a winner or loser at the end.
  */