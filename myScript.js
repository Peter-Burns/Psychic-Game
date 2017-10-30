var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var aiGuess = alphabet[Math.floor(26*Math.random())];
var wins = -1;
var losses = -1;
var guessesLeft = 10;
var userGuesses = [" "];
function updateWin() {
	wins++;
	resetGame();
	document.getElementById("wins").innerHTML = "Wins: " + wins;
}
function updateLosses() {
	losses++;
	resetGame();
	document.getElementById("losses").innerHTML = "Losses: " +losses;
}
function updateGuesses() {
	document.getElementById("guessesRemaining").innerHTML = "Guesses Remaining: " + guessesLeft;
}
function resetGame () {
	aiGuess = alphabet[Math.floor(26*Math.random())];
	guessesLeft = 10;
	userGuesses = [];
	updateGuesses();
	usedUpGuess();
}
function usedUpGuess () {
	document.getElementById("usedGuesses").innerHTML = "Your guesses so far: " + userGuesses;
}
updateWin();
updateLosses();
updateGuesses();
usedUpGuess();
document.onkeyup = function (event){
	if(alphabet.indexOf(event.key)>-1 && userGuesses.indexOf(event.key) == -1){
		console.log(event.key);
		userGuesses.push(event.key);
		if (event.key === aiGuess){
			alert("You win! The letter was " + aiGuess);
			updateWin();
			return;
		}
		guessesLeft--;
		if(guessesLeft === 0){
			alert("You lose! The letter was " + aiGuess);
			updateLosses();
			return;
		}
		usedUpGuess();
		updateGuesses();
	}
	else {
		return;
	}
};