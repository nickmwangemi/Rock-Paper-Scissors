let userScore = 0
let computerScore = 0

function computerPlay() {
	let choices = ['Rock', 'Paper', 'Scissors']
	let selection = Math.floor(Math.random() * choices.length)
	return choices[selection]
}

function userInput() {
	let userInput = prompt('Rock? Paper? Scissors?')
	return userInput.toLowerCase()
}

function wins(playerSelection, computerSelection) {
	userScore++
	return `You Win! ${playerSelection} beats ${computerSelection} `
}

function loses(playerSelection, computerSelection) {
	userScore--
	return `You Lose! ${playerSelection} beats ${computerSelection} `
}

function ties(playerSelection, computerSelection) {
	return "It's a tie!"
}

function game() {
	for (let i = 0; i < 5; i++) {
		let result = playRound(playerSelection, computerSelection)
	}
	if (userScore > computerScore) {
		userScore++
		console.log(`\nYaaaay! You win 
		\n Final Score: USER ${userScore} COMPUTER: ${computerScore}`)
	} else if (computerScore > userScore) {
		computerScore++
		console.log(`\nBoohoo! You lose! 
		\n Final Score: USER ${userScore} COMPUTER: ${computerScore}`)
	} else {
		console.log(`\nIt's a tie!
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
			break

		case 'rockpaper':
		case 'paperscissors':
		case 'scissorsrock':
			loses(playerSelection, computerSelection)
			break

		case 'rockrock':
		case 'paperpaper':
		case 'scissorscissors':
			ties(playerSelection, computerSelection)
			break
	}
	console.log('\nPLAYER: ' + playerSelection)
	console.log('COMPUTER: ' + computerSelection)
}

const playerSelection = userInput()
const computerSelection = computerPlay()

game(playerSelection, computerSelection)
