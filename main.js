let userScore = 0
let computerScore = 0
let lastComputerSelection

let userScoreElement = document.getElementById('user-score')
let computerScoreElement = document.getElementById('computer-score')
let scoreBoard = document.getElementsByClassName('score-board')
let result = document.querySelector('.result')

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let playerSelections = document.querySelectorAll('.choice')
let gameRoundElement = document.getElementById('game-round')
let resetButton = document.getElementById('reset')
let playerSelection
let gameRounds = 0

function rounds() {
	gameRounds++
	gameRoundElement.innerText = `ROUND: ${gameRounds}`
}

gameRoundElement.addEventListener('change', rounds)

function reset() {
	if (gameRoundElement.innerText > '0') {
		gameRounds = 0
		gameRoundElement.innerText = 'ROUND: 0'
		result.innerText = ''
	}
}
resetButton.addEventListener('click', reset)

function computerPlay() {
	let choices = ['Rock', 'Paper', 'Scissors']
	let index = Math.floor(Math.random() * choices.length)
	let selection = choices[index].toLowerCase()
	// check if random selection gets repeated consecutively
	if (selection === lastComputerSelection) {
		// console.log("that's the same one")
		return computerPlay()
	}
	lastComputerSelection = selection
	return selection
}

function wins(playerSelection, computerSelection) {
	userScore++
	computerScore--
	userScoreElement.innerText = userScore
	computerScoreElement.innerText = computerScore
	result.innerText = `Yaaaay! You Win! ${playerSelection} beats ${computerSelection} `
}

function loses(playerSelection, computerSelection) {
	userScore--
	computerScore++
	userScoreElement.innerText = userScore
	computerScoreElement.innerText = computerScore
	result.textContent = `Boohoo! You Lose! ${computerSelection} beats ${playerSelection} `
}

function ties(playerSelection, computerSelection) {
	userScoreElement.innerText = userScore
	computerScoreElement.innerText = computerScore
	result.textContent = "It's a tie!"
}

function game(event) {
	playerSelection = event.target.innerHTML.toLowerCase()

	let computerSelection = computerPlay()

	// For testing purposes
	console.log('USER: ' + event.target.innerHTML.toLowerCase())
	console.log('COMPUTER: ' + computerSelection)

	playRound(playerSelection, computerSelection)
	rounds()
}

playerSelections.forEach((playerSelection) => {
	playerSelection.addEventListener('click', game)
})

function playRound(playerSelection, computerSelection) {
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
}
