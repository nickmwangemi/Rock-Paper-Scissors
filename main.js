function computerPlay() {
	let choices = ['Rock', 'Paper', 'Scissors']
	let selection = Math.floor(Math.random() * choices.length)
	return choices[selection]
}

function userInput() {
	let userInput = prompt('Rock? Paper? Scissors?')
	return userInput
}

function wins(playerSelection, computerSelection) {
	return `You win! ${playerSelection} beats ${computerSelection} `
}

function loses(playerSelection, computerSelection) {
	return `You lose! ${playerSelection} beats ${computerSelection} `
}

function ties(playerSelection, computerSelection) {
	return "It's a tie!"
}

function game() {
	userScore = 0
	computerScore = 0

	for (let i = 0; i < 5; i++) {
		let results = playRound(playerSelection, computerSelection)
		console.log('RESULTS: ' + results)
	}

	if (userScore > computerScore) {
		userScore++
		console.log(`Yaaaay! You win 
		\n Final Score: USER ${userScore} COMPUTER: ${computerScore}`)
	} else if (computerScore > userScore) {
		computerScore++
		console.log(`Boohoo! You lose! 
		\n Final Score: USER ${userScore} COMPUTER: ${computerScore}`)
	} else {
		console.log(`It's a tie!
		\n Final Score: USER ${userScore} COMPUTER: ${computerScore}`)
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = userInput().toLowerCase()
	computerSelection = computerPlay().toLowerCase()

	switch (playerSelection + computerSelection) {
		case 'rockscissors':
		case 'paperrock':
		case 'scissorspaper':
			wins(playerSelection, computerSelection)
			console.log(wins(playerSelection, computerSelection))
			break

		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			loses(playerSelection, computerSelection)
			console.log(loses(playerSelection, computerSelection))
			break

		case 'rockrock':
		case 'paperpaper':
		case 'scissorscissors':
			ties(playerSelection, computerSelection)
			console.log(ties(playerSelection, computerSelection))
			break
	}
	console.log(playerSelection)
	console.log(computerSelection)
}

const playerSelection = 'rock'
const computerSelection = computerPlay()

game(playerSelection, computerSelection)
