var guesscount = 0;

function yourGuess() {
	
	guesscount ++;
		
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");

	if (guesscount > 4) {
		guesses.value = guesses.value + "\r" + "To Many Guesses! ("+guess+")"
		document.getElementById("jumaImage").innerHTML = '<img src="images/smilelost.gif" />';
	} else if(guess == numToGuess) {
        guesses.value = guesses.value + "\r" + "You Are Correct! ("+guess+")";
		document.getElementById("jumaImage").innerHTML = '<img src="images/smilewin.gif" />';
    } else if (guess > numToGuess) {
        guesses.value = guesses.value + "\r" + "To High!("+guess+")";
		document.getElementById("jumaImage").innerHTML = '<img src="images/smilehigh.gif" />';
    } else {
        guesses.value = guesses.value + "\r" + "To Low!("+guess+")";
		document.getElementById("jumaImage").innerHTML = '<img src="images/smilelow.gif" />';
    }
}

function generateNumberToGuess(confirmIt) {
 var guesses = document.getElementById("output");

   if (confirmIt && !confirm('Restart game with new number?')) {
      return;
}

    guesses.value = '';
    numToGuess = Math.floor(Math.random()*20);
    guesses.value = "New number generated.\n";


    document.getElementById('numberToGuess').value = '';
    document.getElementById('cheatShow').style.display = 'none';
}

window.onload = function(){
    generateNumberToGuess();
}
