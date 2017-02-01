var game = {
	//this.bla refers to local object game.bla refers to outside
	//note: use commas , inside object instead of ;
	options: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
	wins: 0,
	losses: 0,
	countdown: 9,
	"user-guess": 0 + "Type letters here",
	maximumGuesses: 9,

};

		var allLetters = "abcdefghijklmnopqrstuvwxyz";
		var alphabet = allLetters.split("");
		var 
			//function getRandomCharacter() {
				
				//var randomIndex = (Math.random()* game.options.length);

				//randomIndex = Math.floor(randomIndex);

				//return game.options[randomIndex];
			//}

			//var newCharacter = getRandomCharacter();

	var computerGuess = game.options[Math.floor(Math.random() * game.options.length)];
	console.log(computerGuess);
	

	document.onkeyup = function(event){
	var userGuess = event.key;

	//need a function to run the user guess against the computer guess!!!!!//

	if (userGuess !== computerGuess){
		
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		
	}

	if (userGuess === computerGuess){
	
		document.getElementById("wins").innerHTML = "Wins: " + wins;
	}

		function letter(userGuess){
			document.getElementById("userGuess").innerHTML = "Guesses so far: " + userGuess;
		}
	//var listedLetters = document.createElement("userGuess");
	
		//listedLetters.append(use);
//looked up javascript array filter in w3schools
	function moreUserGuesses(letter) {
    		return letter != computerGuess;
}

	function myFunction() {
    document.getElementById("user-guess").innerHTML = letter.filter(moreUserGuesses);
}

}

//need to set a max # of guesses
//must list 





