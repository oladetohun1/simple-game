console.log('Let us play a guessing game')
const playerName = prompt("Please enter username");
console.log(`Hello ${playerName} ,`)
let point = 0;
const guessingGame = (range) => {
    const randomGuess = Math.floor(Math.random() * range) + 1;
    const guess = prompt(`Predict a number between 1 and ${range}`);
    const playersGuess = Number(guess);
    if (randomGuess === playersGuess) {
        point = point + 1;
        alert(`congratulations You guessed correctly!, ${playerName}, You've scored ${point} point`);
      guessingGame(range + 1);
    } else {
      point = 0;
      alert("You lose!");
    }
  };
  guessingGame(2);