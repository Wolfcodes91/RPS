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
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

/*----- sound variables -----*/
const audio = [
    new Audio ("/Users/davewolfberg/code/RPS/Sounds/ROCK COOKIN.wav"), 
    new Audio ("/Users/davewolfberg/code/RPS/Sounds/FLY PAPER.wav"),
    new Audio ("/Users/davewolfberg/code/RPS/Sounds/SCISSORS ED WAV.wav"),
]
/*----- event listeners -----*/
document.getElementById("rock").onclick = () => play(0) 
document.getElementById("paper").onclick = () => play(1)
document.getElementById("scissors").onclick = () => play(2)
document.getElementById("reset").onclick = reset;
/*----- functions -----*/
function init() {
  playerScore = 0
  tieScore = 0
  computerScore = 0
  resultText.innerText = " ";
} 
function resetButtons() {
  rock.classList.remove('highlight')
  paper.classList.remove('highlight')
  scissors.classList.remove('highlight')
}
function reset() {
  document.getElementById("playerScore").innerHTML = 0;
  document.getElementById("computerScore").innerHTML = 0;
  document.getElementById("tieScore").innerHTML = 0;
  resetButtons();
  init();
} 
function play (choice) {
    player.currentChoice = choices[choice];
    audio[choice].play();
    compareChoices();
}
computerChooses = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}
compareChoices = () => {
  resetButtons();
  computerChooses();
  if (computer.currentChoice === player.currentChoice) { 
    tieScore++;
    displayResult("TIE both chose " + computer.currentChoice + "!"); 
  } else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){ 
      playerScore++;
      displayResult("Player wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
      paper.classList.add('highlight');
    }else{ 
      computerScore++;
      displayResult("Computer wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
      rock.classList.add('highlight')
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      playerScore++;
      displayResult("Player wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
      scissors.classList.add('highlight')
    }else{
      computerScore++;
      displayResult("Computer wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
      paper.classList.add('highlight');
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      playerScore++;
      displayResult("Player wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!"); 
      rock.classList.add('highlight')
    }else{
      computerScore++;
      displayResult("Computer wins! Computer chose " + computer.currentChoice + " and Player chose " + player.currentChoice + "!");
      scissors.classList.add('highlight') 
    }
  }
}
displayResult = (result) => { 
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  document.getElementById("tieScore").innerHTML = tieScore;
  resultText.innerText = result;
  resultText.style.fontSize = "5vmin";
  resultText.style.backgroundColor = "lightGray";
  resultText.style.borderRadius = 
  "3vmin"
  resultText.style.color = "red";
  document.body.appendChild(resultText);  
};


