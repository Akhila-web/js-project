const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const muteButton = document.getElementById("mute-button"); // Add a mute button in your HTML

let playerScore = 0;
let computerScore = 0;
let isMuted = false; // Global mute state

const audioFiles = {
  rock: new Audio("../sounds/rock.mp3"),
  paper: new Audio("../sounds/paper.mp3"),
  scissors: new Audio("../sounds/scissor.mp3"),
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();

    if (!isMuted) {
      playAudio(playerSelection);
    }

    const result = playRound(playerSelection, computerSelection);
    resultEl.textContent = result;
  });
});

// Mute Button Click Event
muteButton.addEventListener("click", () => {
  isMuted = !isMuted; // Toggle mute state
  muteButton.textContent = isMuted ? "Unmute" : "Mute"; // Update button text
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function playAudio(action) {
  if (audioFiles[action]) {
    audioFiles[action].currentTime = 0;
    audioFiles[action].play();
  }
}







































// const buttons = document.querySelectorAll("button");

// const resultEl = document.getElementById("result");

// const playerScoreEl = document.getElementById("user-score");

// const computerScoreEl = document.getElementById("computer-score");

// let playerScore = 0;
// let computerScore = 0;


// const audioFiles = {
//   rock: new Audio("rock.mp3"),      
//   paper: new Audio("paper.mp3"),  
//   scissors: new Audio("scissor.mp3"), 
// }
 

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const playerSelection = button.id;
//     const computerSelection = computerPlay();

    
//     playAudio(playerSelection);

//     const result = playRound(playerSelection, computerSelection);
//     resultEl.textContent = result;
//   });
// });

// function computerPlay() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomChoice = Math.floor(Math.random() * choices.length);
//   return choices[randomChoice];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     playerScore++;
//     playerScoreEl.textContent = playerScore;
//     return "You win! " + playerSelection + " beats " + computerSelection;
//   } else {
//     computerScore++;
//     computerScoreEl.textContent = computerScore;
//     return "You lose! " + computerSelection + " beats " + playerSelection;
//   }
// }


// function playAudio(action) {
//   if (audioFiles[action]) {
//     audioFiles[action].currentTime = 0; 
//     audioFiles[action].play();
//   }
// }

    
   





























// // const buttons = document.querySelectorAll("button");

// // const resultEl = document.getElementById("result");

// // const playerScoreEl = document.getElementById("user-score");

// // const computerScoreEl = document.getElementById("computer-score");

// // let playerScore = 0;
// // let computerScore = 0;

// // buttons.forEach((button) => {
// //   button.addEventListener("click", () => {
// //     const result = playRound(button.id, computerPlay());
// //     resultEl.textContent = result;
    
// //   });
// // });

// // function computerPlay() {
// //   const choices = ["rock", "paper", "scissors"];
// //   const randomChoice = Math.floor(Math.random() * choices.length);
// //   return choices[randomChoice];
// // }

// // function playRound(playerSelection, computerSelection) {
// //   if (playerSelection === computerSelection) {
// //     return "It's a tie!";
// //   } else if (
// //     (playerSelection === "rock" && computerSelection === "scissors") ||
// //     (playerSelection === "paper" && computerSelection === "rock") ||
// //     (playerSelection === "scissors" && computerSelection === "paper")
// //   ) {
// //     playerScore++;
// //     playerScoreEl.textContent = playerScore;
// //     return "You win! " + playerSelection + " beats " + computerSelection;
// //   } else {
// //     computerScore++;
// //     computerScoreEl.textContent = computerScore;
// //     return "You lose! " + computerSelection + " beats " + playerSelection;
// //   }
// // }