function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let gameOver = false;
    let numGuesses = 0;

    return function guess(num) {
        if (gameOver) return "Game is over. You already won!";
        numGuesses++;
        if (num === answer) {
            gameOver = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numGuesses} ${guess}.`;
        }
        if (num < answer) return `${num} is too low!`;
        if (num > answer) return `${num} is too high!`;
    };
}

module.exports = { guessingGame };
