//options for both user and computer//
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//setting variables for my p ids//
var wins = 0;
var losses = 0;
var countdown = 9; //{
//document.getElementById("countdown").innerHTML ="guesses left: " - 1;


//computer randomly chooses a letter THIS IS CORRECT//
var computerGuess = options[Math.floor(Math.random() * options.length)];{
console.log(computerGuess);
}

//when user presses a letter key letter displays in the Guesses so far section and the 
document.onkeyup = function(event){
	var userGuess = event.key;
	document.getElementById("userGuess").innerHTML = "Guesses so far: ";

	for( var i = 0; i <options.length; i++){
		if (userGuess === computerGuess)
		console.log(options[i]);
	}

	if (userGuess === computerGuess){
		wins++;
	}
document.getElementById("wins").innerHTML = "wins: " + wins;
//if the userguess letter does not match conputerGuess. add 1 to the losses column//
	//else (){losses++}
		document.getElementById("losses").innerHTML = "losses: " +losses;
}



