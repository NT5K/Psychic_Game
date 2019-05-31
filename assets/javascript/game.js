
//asssign variables to ID's
var winsCountText = document.getElementById("win-text");
var lossCountText = document.getElementById("loss-text");
var guessesLeft = document.getElementById("count-text");
var guessedLettersText = document.getElementById("guess-text");
var instructionsText = document.getElementById("instructions-text");
var lettersGuessedTextEmpty = document.getElementById("letters-guessed-text-empty");
var winningLetterText = document.getElementById("winning-letter-text");


// letters computer can choose from so they cannot pick anything but letters
var availableKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// empty variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var lettersUserGuessed = [];
var computerGuess = " ";

//reset game when user wins or guessCount = 0 and pick a new random letter from array of letters
    function gameReset() {
        guessesRemaining = 9;
        lettersUserGuessed = [];
        computerGuess = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    }

// when key is pressed
document.onkeyup = function (event) {

    //var userGuess takes the parameter 'event' adds a .key method when user hits a key
    var userGuess = event.key;
  
    // if userGuess contains one of the choice letters and a guess is not already a letter chosen {
    if (availableKeys.includes(userGuess) && !lettersUserGuessed.includes(userGuess)) {

        // if guess count runs out, reset game using gameReset() function and add 1 to losses
        if (guessesRemaining === 0) {
            gameReset();
            losses++;
        }

        /* when user letter guess is equal to the computer letter guess, add one to win count,
            reset the game with gameReset() function */
        else if (userGuess === computerGuess) {
            wins++;
            gameReset();
        }

        /* if choices do not match !==, subrtract one from guessesRemaining left and push userGuess to 
             lettersUserGuessed array */
        else {
            guessesRemaining--;
            lettersUserGuessed.push(userGuess);       
        }                           
    }

    // update HTML text with .textContent
    instructionsText.textContent = "";
    winsCountText.textContent = "Wins: " + wins;
    guessedLettersText.textContent = lettersUserGuessed;
    guessesLeft.textContent = "Guesses left: " + guessesRemaining;
    lossCountText.textContent = "Losses: " + losses;
    lettersGuessedTextEmpty.textContent = "Letters Guessed:"
} 