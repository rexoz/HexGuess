let colors = colorPicker();
let pickedColor = colors[Math.floor(Math.random() * 6)];
let points = 0;
let lives = 10;


const pointdisplay = document.querySelector(".points");
const livedisplay = document.querySelector(".lives");
const colorDisplay = document.querySelector(".color");
colorDisplay.textContent = pickedColor;
const guesses = document.querySelectorAll(".guess");
const message = document.querySelector(".message");
// const canvas = document.querySelector(".color");
// const ctx = canvas.getContext("2d");
// ctx.font = "60px Arial";
// ctx.fillText("hi, 10, 50);


guesses.forEach((guess, i) => {
  guess.style.background = colors[i];
  guess.addEventListener("click", function() {
    if (colors[i] === pickedColor) {
      updatePoints(5);
      resetGame();
      message.textContent = "Correct!";
    } else {
      lives--;
      livedisplay.textContent = `${lives} Lives`
      if (lives === 0) {
        message.textContent = "Game Over!";
        guesses.forEach((guess) => {
          guess.style.display = "none";
          document.querySelector(".play-again").style.display = "block";
        });
        return 0;
      }
      guess.style.background = "#333";
      message.textContent = "Try Again!";
    }
  }); 
});



function colorPicker() {
  let newColors = [];
  for (let i = 0; i < 7; i++) {
    let newColor = `#${Math.floor((Math.random() * 90) + 10)}${Math.floor((Math.random() * 90) + 10)}${Math.floor((Math.random() * 90) + 10)}`;
    newColors.push(newColor);
  }
  return newColors
}

function updatePoints(num) {
  points = points + num;
  pointdisplay.textContent = points+" Points";
}

function resetGame() {
  document.querySelector(".play-again").style.display = "none";
  
  message.textContent = "Make a guess!";
  livedisplay.textContent = `${lives} Lives`
  colors = colorPicker();
  pickedColor = colors[Math.floor(Math.random() * 6)];
  colorDisplay.textContent = pickedColor;
  guesses.forEach((guess, i) => {
    guess.style.display = "block";
    guess.style.background = colors[i];
  });
}

document.querySelector(".play-again").addEventListener("click", () => {
  resetGame();
  lives = 10;
  updatePoints(-points);
});

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get('mode');

// if (myParam === "easy") {
//   console.log("easy")
// } else {
//   console.log("hard")
// }