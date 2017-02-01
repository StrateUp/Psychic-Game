//object creation//
var game = {
	wins: 0,
	losses: 0
};

//options for both user and computer//
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//setting variables for my p ids//
var wins = 0;
var losses = 0;
var countdown = 9; 
var userGuess = 0;

//Init display 
initDisplay();

//computer randomly chooses a letter THIS IS CORRECT//
var computerGuess = options[Math.floor(Math.random() * options.length)];
console.log(computerGuess);


//when user presses a letter key letter displays in the "Guesses so far" section//
document.onkeyup = function(event){
	var userGuess = event.key;


	//need a function to run the user guess against the computer guess!!!!!//

	if (userGuess !== computerGuess){
		//countDownAndRecordResult(losses);
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		//computerGuessAgain();
	}

	if (userGuess === computerGuess){
		//countDownAndRecordResult(wins);
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		//computerGuessAgain();
	}

	letter(userGuess);
		
//if the userguess letter does not match conputerGuess. add 1 to the losses column//
	//else (){losses++}
		
}

function letter(userGuess) {


	//The selection prints 

	//To the screen with their guesses

	document.getElementById("userGuess").innerHTML = "Guesses so far: " + userGuess;
}

//function countDownAndRecordResult(result) {
	//result++;
	//countdown--;
	//document.getElementById("countdown").innerHTML = "Guesses left: " + countdown;
//}

function countDown() {
	countdown--;
	
}

function initDisplay() {
	document.getElementById("userGuess").innerHTML = "Guesses so far: " + userGuess;
	document.getElementById("countdown").innerHTML = "Guesses left: " + countdown;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
}

//function computerGuessAgain(){
	//computerGuess = options[Math.floor(Math.random() * options.length)];
	//console.log(computerGuess);
//}
