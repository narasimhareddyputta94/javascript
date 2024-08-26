// Initialize game variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

// Select elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsLeftDisplay = document.getElementById('attemptsLeft');
const resetButton = document.getElementById('resetButton');

// Function to check the guess
function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = 'Congratulations! You guessed the correct number!';
        gameOver();
    } else if (attemptsLeft === 0) {
        message.textContent = `Game Over! The correct number was ${randomNumber}.`;
        gameOver();
    } else {
        if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Too low! Try again.';
        }
    }

    attemptsLeftDisplay.textContent = attemptsLeft;
    guessInput.value = '';
    guessInput.focus();
}

// Function to end the game
function gameOver() {
    guessButton.disabled = true;
    guessInput.disabled = true;
    resetButton.style.display = 'block';
}

// Function to reset the game
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = 10;
    message.textContent = '';
    attemptsLeftDisplay.textContent = attemptsLeft;
    guessButton.disabled = false;
    guessInput.disabled = false;
    resetButton.style.display = 'none';
    guessInput.value = '';
    guessInput.focus();
}

// Add event listeners
guessButton.addEventListener('click', checkGuess);
guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
resetButton.addEventListener('click', resetGame);
