/*----- variables -----*/
let playerScore = 0;
let tieScore = 0;
let computerScore = 0;
const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}
const choices = ["rock", "paper", "scissors"];
const resultText = document.createElement('p');

/*----- sound variables -----*/
const audioRock = new Audio
audioRock.src="/Users/davewolfberg/code/RPS/Sounds/ROCK COOKIN.wav";
const audioPaper = new Audio
audioPaper.src="/Users/davewolfberg/code/RPS/Sounds/FLY PAPER.wav";
const audioScissors = new Audio
audioScissors.src="/Users/davewolfberg/code/RPS/Sounds/SCISSORS ED WAV.wav";

/*----- event listeners -----*/
document.getElementById("rock").onclick = playRock;
document.getElementById("paper").onclick = playPaper;
document.getElementById("scissors").onclick = playScissors;
document.getElementById("reset").onclick = reset;

/*----- functions -----*/
function init() {
  playerScore = 0
  tieScore = 0
  computerScore = 0
  resultText.innerText = " ";
  document.querySelector("button").backgroundColor = "blue";
} 
function reset() {
  document.getElementById("playerScore").innerHTML = 0;
  document.getElementById("computerScore").innerHTML = 0;
  document.getElementById("tieScore").innerHTML = 0;
  document.querySelector("button").backgroundColor = "blue";
  init();
} 
function playRock() {
  player.currentChoice = choices[0];
  audioRock.play();
  compareChoices();
}
function playPaper() {
  player.currentChoice = choices[1];
  audioPaper.play();
  compareChoices();
}
function playScissors() {
  player.currentChoice = choices[2];
  audioScissors.play();
  compareChoices();
}
computerChooses = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}
compareChoices = () => {
  computerChooses();
  if (computer.currentChoice === player.currentChoice) { tieScore++;
    displayResult("TIE both chose " + computer.currentChoice + "!"); 
    } else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){ 
      playerScore++;
      displayResult("Player wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
    }else{ 
      computerScore++;
      displayResult("Computer wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      playerScore++;
      displayResult("Player wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
    }else{
      computerScore++;
      displayResult("Computer wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      playerScore++;
      displayResult("Player wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
    }else{
      computerScore++;
      displayResult("Computer wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
    }
  }
}
displayResult = (result) => { 
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById("tieScore").innerHTML = tieScore;
  resultText.innerText = result;
  resultText.style.fontSize = "3vmin";
  resultText.style.backgroundColor = "lightGray";
  resultText.style.borderRadius = 
  "3vmin"
  resultText.style.color = "red";
  document.body.appendChild(resultText);  
};


