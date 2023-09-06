# JavaScript Number Guessing Game

This is a simple number guessing game implemented in JavaScript, utilizing Document Object Model (DOM) manipulation to create an interactive user experience. The game is designed for players to guess a randomly generated number between 1 and 20.

visit: https://guessinggame-dom.netlify.app/

## Features

- Randomly generated number between 1 and 20 for each game session.
- Interactive interface with input field, submit button, and feedback messages.
- Keeps track of the number of attempts.
- Provides feedback to the player after each guess: "Too low," "Too high," or "Congratulations, you guessed the number!"
- Option to restart the game for a new round.

## How to Play

1. Open the `index.html` file in your web browser.

2. You will see the game interface, including an input field to enter your guess, a submit button to submit your guess, and feedback messages to guide you.

3. Enter your guess in the input field and click the "Submit" button.

4. The game will provide feedback on your guess. If your guess is too low or too high, it will let you know. If you guessed the number correctly, it will congratulate you and display the number of attempts it took.

5. To start a new round, click the "Restart" button.

## Technologies Used

- HTML: The structure of the game.
- CSS: Styling the user interface.
- JavaScript: Implementing the game logic and DOM manipulation.

## Files Included

- `index.html`: The main HTML file containing the game interface.
- `style.css`: CSS file for styling the game.
- `queries.css`: CSS file for media queries.
- `script.js`: JavaScript file containing the game logic and DOM manipulation.

## Game Logic

The game logic is implemented in `script.js` and includes the following steps:

1. Generate a random number between 1 and 20 at the start of each game session.

2. Listen for user input (guess) and validate it to ensure it is a number between 1 and 20.

3. Compare the user's guess with the generated random number.

4. Provide feedback to the user based on their guess (too low, too high, or correct).

5. Keep track of the number of attempts and display it to the user.

6. Allow the user to restart the game for a new round.

## Customization

You can customize the game further by modifying the CSS styles or changing the range of numbers for guessing by editing the JavaScript code in `script.js`.

Feel free to explore and enhance the game as you like!
