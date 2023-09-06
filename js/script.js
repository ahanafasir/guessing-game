"use strict"; // Enables strict mode for better coding practices

// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the player's score and highscore
let score = 20;
let highscore = 0;

// Function to display messages on the web page
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Event listener for the "Check" button
document.querySelector(".check").addEventListener("click", function () {
  // Get the user's guess from the input field
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); // Log the guess to the console

  // When there is no input (empty or not a number)
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber; // Display the correct number

    document.querySelector("body").style.backgroundColor = "#60b347"; // Change background color
    document.querySelector(".number").style.width = "30rem"; // Increase the width of the number box

    // Update the highscore if the current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Provide hints and reduce the score if there are remaining attempts
      displayMessage(guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // When the player runs out of attempts
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Event listener for the "Again" button (to start a new game)
document.querySelector(".again").addEventListener("click", function () {
  // Reset the score and generate a new secret number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset messages and input field
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  // Reset background color and number box width
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
