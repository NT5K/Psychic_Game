  
    //asssign variables to ID's
    var winText = document.getElementById("win-text");
    var lossText = document.getElementById("loss-text");
    var countText = document.getElementById("count-text");
    var guessText = document.getElementById("guess-text");
    var instructionsText = document.getElementById("instructions-text");
    var lettersGuessedTextEmpty = document.getElementById("letters-guessed-text-empty");
    

    // letters computer can choose from so they cannot pick anything but letters
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
            "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    // empty variables
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessChoices = [];

    // when key is pressed
    document.onkeyup = function (event) {
    
        //var userGuess takes the parameter 'event' adds a .key method when user hits a key
        var userGuess = event.key;

        //random number the length of computerChoices
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        //possibiities to eliminate anything except letters
        var myOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
                         "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        // if userguess(keypress) is equal to the myOptions array / not false (-1) ...do this function
        if (myOptions.indexOf(userGuess) > -1) {

            /* when user letter guess is equal to the computer letter guess, add one to win count,
             reset guesses to 9 and clear the guessChoices array */
            if (userGuess === computerGuess){
                wins++
                guesses = 9
                guessChoices = [ ]
            }

            // if choices do not match, subrtract one from guesses left and push userGuess to guessChoices 
            if (userGuess !== computerGuess) {
                guesses--
                guessChoices.push(userGuess)
            }

            // if guess count runs out, reset guessCount to 9, clear the guessChoices array and add 1 to losses
            if (guesses === 0){
                guesses = 9
                guessChoices = [ ]
                losses++
            }       
            
            // update HTML text with .textContent
            instructionsText.textContent = "";
            winText.textContent = "Wins: " + wins;
            guessText.textContent = guessChoices ;
            countText.textContent = "Guesses left: " + guesses;
            lossText.textContent = "Losses: " + losses;
            lettersGuessedTextEmpty.textContent = "Letters Guessed:"
        }

    }
