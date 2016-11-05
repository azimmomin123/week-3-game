
//Creating Variables
var company;
var guessLeft;
var guessLetters;
var blanks;
var gameAnswer;
var spaces;
var wins = 0; 

//This runs when the page loads
function reset(){
	//Making a list of different companies array
	company = ["facebook",
	"apple",
	"teslas",
	"uber",
	"google",
	"linkedin",
	"pied piper"];
	//Creating Array for guessed letters
	guessLetters = [];
	//To display _'s or ?'s
	blanks = "";
	//Variable for storing Game answer
	gameAnswer = "";
	//Variable to display updated blaks after guess
	spaces = "";
	//Number of Guesses left
	guessLeft = 3;
	//Calling on functions for computer to guess a comapny, show blanks and print to the document
	gameAnswer = computerGuess(company);
	spaces = printBlanks(gameAnswer);
	printDoc(spaces, guessLeft, guessLetters, wins);

	// User Presses key and sets variable to userGuess
	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		console.log(userGuess);
		//Populates guess letters in array
		guessLetters.push(userGuess);
		//Updates document
		printDoc(spaces,guessLeft, guessLetters, wins);
		//Checking letter for a match
		checkLetter(userGuess);
	}
}

//Initializing the page and for resetting the game
reset();

// This sets the computer guess equal to the random.
function computerGuess(xyz){
	unknown = xyz[Math.floor(Math.random() * xyz.length)];
	return unknown;
}

//Function to print blanks
function printBlanks(abc){
	//For loop to print blanks
	for (var i = 0; i < abc.length; i++){
		console.log(abc);
		if (i === 0){
			blanks = "?";
		}else {
			blanks = "?" + blanks;
		}
	}
	return blanks;
}

//Function prints to the document
function printDoc(dash, guessLeft, guessLetters, wins){

	document.getElementById("dash").innerHTML = dash;
	document.getElementById("guessLeft").innerHTML = guessLeft;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("guessLetters").innerHTML = guessLetters;
}

function updateNewBlanks (dash){
	document.getElementById("dash").innerHTML = "";
}



//Function to find index of a letter in a string returning an index value
function checkLetter(letter){
	var pos = 0;
	var i = -1;

	while (pos != -1) {
	    pos = gameAnswer.indexOf(letter, i + 1);
	    if (pos>=0){
	    	updateBlanks(pos, letter, spaces);
	    	//Checks string to see if it has any unguessed spaces if not then will alert WINNER!
	    	if (spaces.includes("?") === false){
	    		alert("Winner Winner! Chicken Dinner!");
	    		wins += 1;
	    		reset();
	    	}
	    }
	    //Making sure that the users first guess is incorrect to decrease the guesses left. Pos = -1 when it can not find the letter. 
	    else if (i === -1 && pos === -1){
	    	guessLeft = guessLeft - 1;
	    	//if guess left is less than 0 then end the game. 
	    	if (guessLeft===0){
	    		updateNewBlanks(guessLetters);
	    		printDoc(spaces,guessLeft, guessLetters, wins);

	    		//console.log(guessLetters);
	    		alert("You LOSER! You only had one JOB and you lost!");
	    		//After loosing the game will reset
	    		reset();
	    	}
	    }
	    else{

	    }
	    printDoc(spaces,guessLeft, guessLetters, wins);
	    i = pos;
  	}
	}

	function updateBlanks(pos, guess, spaced){
		spaces = spaced.substr(0,pos) + guess + spaced.substr(pos+1, spaced.length);
	console.log(spaces);
	}

// 	function resetGame(){
// 	//This runs when the page loads
//   	gameAnswer = computerGuess(company);
//   	var guessLetters = [];
//   	//console.log(gameAnswer);
// 	spaces = printBlanks(gameAnswer);
// 	console.log(guessLetters);
// 	printDoc(spaces,guessLeft, guessLetters);  // issue is here

// 	// User Presses key and sets variable to userGuess
// 	document.onkeyup = function(event) {
// 		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
// 		console.log(gameAnswer);
// 		printDoc(spaces,guessLeft, guessLetters, wins);
// 		console.log(gameAnswer);

// 		guessLetters.push(userGuess);
// 		checkLetter(userGuess);
// 		printDoc(spaces,guessLeft, guessLetters, wins);
// 	}

// 	guessLeft = 3;
// 	console.log(gameAnswer);
// }

