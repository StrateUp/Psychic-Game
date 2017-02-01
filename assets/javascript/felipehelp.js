
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	var computerChoice = getRandomCharacter();
	console.log(computerChoice);
	var wins = 0;
	var losses = 0;
	var guesses = 9;
	var guessesSoFar = "";

	restartGame();

	function getRandomCharacter() {
				
		var randomIndex = Math.random()* alphabet.length;

		randomIndex = Math.floor(randomIndex);

		return alphabet[randomIndex];
	}

	function restartGame(){
		computerChoice = getRandomCharacter();
		guessesSoFar = "";
		guesses = 9;

		ReplaceElementContent("player-wins", wins);
		ReplaceElementContent("player-losses", losses);
		ReplaceElementContent("guesses-left", guesses);
		ReplaceElementContent("guesses-so-far", guessesSoFar);
	}

	function ReplaceElementContent(id, content){
		document.getElementById(id).innerHTML = content;

	}


	
	document.onkeyup = function(event){
	
		
		//get user inputted key
		var userInput = event.key.toLowerCase();
			

			//check if user input is ok; index of is designed this way
			if(alphabet.indexOf(userInput) === -1) {
				return;
			}
			console.log("user chose:" + userInput);
			//store in guessessofar
			if(guessesSoFar === ""){
			  guessesSoFar = userInput;

			}else {
				guessesSoFar = guessesSoFar + ", " + userInput;
			}
				console.log("user chose:" + guessesSoFar);
				ReplaceElementContent("guesses-so-far", guessesSoFar);
			

			//compare user guess to computer choice
			if (userInput === computerChoice){
			wins++;
				ReplaceElementContent("player-wins", wins);
				console.log("user has won!");
			//restart the game
				restartGame();

		}else{
			guesses--;
			console.log("user lost one guess")
			//made this a function up top: document.getElementById("guesses-left").innerHTML = guesses;
			ReplaceElementContent("guesses-left", guesses);
			ReplaceElementContent("guesses-so-far", guessesSoFar);
			//determine if the user has run out of guesses
				if(guesses === 0){
					
					losses++;
					ReplaceElementContent("player-losses", losses);
					restartGame();
				}

		}
	}
