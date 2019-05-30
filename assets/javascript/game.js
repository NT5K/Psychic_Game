  
    //asssign variables to ID's
    var winsCountText = document.getElementById("win-text");
    var lossCountText = document.getElementById("loss-text");
    var guessesLeft = document.getElementById("count-text");
    var guessedLettersText = document.getElementById("guess-text");
    var instructionsText = document.getElementById("instructions-text");
    var lettersGuessedTextEmpty = document.getElementById("letters-guessed-text-empty");
    

    // letters computer can choose from so they cannot pick anything but letters
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    //possibiities to eliminate anything except letters (converted it into a global variable)
    var myOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
                         "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    // empty variables
    var wins = 0;
    var losses = 0;
    var guessesRemaining = 9;
    var lettersUserGuessed = [];
    var isDuplicate = false;
    
    //random number the length of computerChoices
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    // when key is pressed
    document.onkeyup = function (event) {
    
        
        //var userGuess takes the parameter 'event' adds a .key method when user hits a key
        var userGuess = event.key;

        //reset game when user wins or guessCount = 0 and pick a new random letter from array of letters
            function gameReset() {
                guessesRemaining = 9;
                lettersUserGuessed = [];
                computerGuess
            }

            // if userguess(keypress) is equal to the myOptions array / not false (-1) ...do this function
            if (myOptions.indexOf(userGuess) > -1) {

                    
                /* when user letter guess is equal to the computer letter guess, add one to win count,
                    reset guessesRemaining to 9 and clear the lettersUserGuessed array */
                    if (userGuess === computerGuess){
                        wins++
                        gameReset()
                        
                    }

                        // if choices do not match, subrtract one from guessesRemaining left and push userGuess to lettersUserGuessed 
                        if (userGuess !== computerGuess) {
                            guessesRemaining--
                            lettersUserGuessed.push(userGuess)

                            // if guess count runs out, reset guessCount to 9, clear the lettersUserGuessed array and add 1 to losses
                            if (guessesRemaining === 0){
                                gameReset()
                                losses++
                            }          
                        }
            }    
       

            // update HTML text with .textContent
            instructionsText.textContent = "";
            winsCountText.textContent = "Wins: " + wins;
            guessedLettersText.textContent = lettersUserGuessed ;
            guessesLeft.textContent = "Guesses left: " + guessesRemaining;
            lossCountText.textContent = "Losses: " + losses;
            lettersGuessedTextEmpty.textContent = "Letters Guessed:"
    } 
