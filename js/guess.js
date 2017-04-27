// text output - paragraph tags
var guessText = null;
var messageText = null;
var triesText = null;

// buttons - hyperlinks to be styled
var upButton = null;
var downButton = null;
var guessButton = null;

// constants for maximum and minimum guesses ... can not be changed
// after the fact.
const MAX_GUESS = 50;
const MIN_GUESS = 0;

// the number you will be guessing on each try
var currentGuess = 25;

// the number of tries or guesses you get before the game is over
var triesLeft = 10;

// pick an integer between MIN_GUESS and MAX_GUESS (inclusive)
var secret = Math.round(Math.random() * (MAX_GUESS - MIN_GUESS) + MIN_GUESS);
// console.log( secret );

window.onload = function() {
    // page has finished loading
    console.log('JavaScript Started.');

    // store references to the needed HTML elements
    // in our prepared variables
    guessText = document.getElementById('guess-text');
    messageText = document.getElementById('message-text');
    triesText = document.getElementById('tries-text');

    upButton = document.getElementById('up-button');
    downButton = document.getElementById('down-button');
    guessButton = document.getElementById('guess-button');

    // check the values of all the variables
    // console.log( guessText, messageText, triesText, upButton, downButton, guessButton );

    upButton.onclick = function() {
        // the up button was clicked

        // add one to the current guess in memory
        currentGuess++;

        // keep the currentGuess from exeeding 
        // the highest possible guess
        if (currentGuess > MAX_GUESS) {
            currentGuess = MAX_GUESS;
        }

        // put the current guess into the desired 'p' tag
        guessText.innerHTML = currentGuess;

        console.log('up button was clicked.');
    }

    downButton.onclick = function() {
        // the down button was clicked

        // subtract one from the current guess in memory
        currentGuess--;

        // keep the currentGuess from being less than
        // the lowest possible guess
        if (currentGuess < MIN_GUESS) {
            currentGuess = MIN_GUESS;
        }

        // put the current guess into the desired 'p' tag
        guessText.innerHTML = currentGuess;

        console.log('down button was clicked.');
    }

    guessButton.onclick = function() {
        console.log('guess button was clicked.');

        triesLeft--;
        triesText.innerHTML = triesLeft;

        if (triesLeft < 0) {
            window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        }

        // compare guess vs. secret and display the correct result
        if (currentGuess > secret) {

            // the guess is too high
            messageText.innerHTML = 'Your guess was too high!';

        } else if (currentGuess < secret) {

            // the guess is too low
            messageText.innerHTML = 'Your guess was too low!';

        } else {

            // the guess was correct - user won the game
            messageText.innerHTML = 'You guessed the number, congratulations you won!';
        }

    }
}