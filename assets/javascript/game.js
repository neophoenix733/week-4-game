$(document).ready(function(){
	var Random=Math.floor(Math.random()*101+19)
	//Here we select random numbers to display at the beginning of the game
	//Number between 19 and 120

	$('#randomNumber').text(Random);
	//Here append the random choice to HTML spread id created called randomNumber
	//Each var represents a seperate crystal 

	var num1 = Math.floor(Math.random()*11+1)
	var num2 = Math.floor(Math.random()*11+1)
	var num3 = Math.floor(Math.random()*11+1)
	var num4 = Math.floor(Math.random()*11+1)
	//Setting up random numbers per crystal
	//Numbers chosen must be between 1 and 12 per rules

	var playerTotal= 0;
	var wins= 0;
	var losses= 0;
	//Taliie declaration 

$('#numberWins').text(wins);
$('#numberLosses').text(losses);


//This will reset the game
	function reset() {
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
			$('#randomNumber').text(Random);
			num1 = Math.floor(Math.random() * 11 + 1);
			num2 = Math.floor(Math.random() * 11 + 1);
			num3 = Math.floor(Math.random() * 11 + 1);
			num4 = Math.floor(Math.random() * 11 + 1);
			playerTotal = 0;
			$('#finalScore').text(playerTotal);
		}

	//adds wins for the playerTotal
	function score() {
		alert("You Scored!");
			wins++;
				$('#numberWins').text(wins);
					reset();
	}

	//adds losses for the playerTotal
	function loss() {
		alert ("You Lost");
			losses++;
			$('#numberLosses').text(losses);
				reset();
	}

	//creating click functions for the crystals
	$('#one').on('click', function(){
		playerTotal = playerTotal = num1;
		console.log("New playerTotal" + playerTotal);
			$('#finalTotal').text(playerTotal);
			//This sets both the loss and win conditions

		if (playerTotal === Random) {
			score();
		}
		else if (playerTotal > Random) {
			loss();
		}
	});

	$('#two').on('click', function() {
		playerTotal = playerTotal = num2;
		console.log("New playerTotal" + playerTotal);
			$('#finalTotal').text(playerTotal);
			//This sets both the loss and win conditions

		if (playerTotal === Random) {
			score();
		}
		else if (playerTotal > Random) {
			loss();
		}
	});

	$('#three').on('click', function() {
		playerTotal = playerTotal = num3;
		console.log("New playerTotal" + playerTotal);
			$('#finalTotal').text(playerTotal);
			//This sets both the loss and win conditions

		if (playerTotal === Random) {
			score();
		}
		else if (playerTotal > Random) {
			loss();
		}
	});

	$('#four').on('click', function() {
		playerTotal = playerTotal = num4;
		console.log("New playerTotal" + playerTotal);
			$('#finalTotal').text(playerTotal);
			//This sets both the loss and win conditions

		if (playerTotal === Random) {
			score();
		}
		else if (playerTotal > Random) {
			loss();
		}
	});
});