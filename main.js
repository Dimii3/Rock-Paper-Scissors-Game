const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const myScore = document.querySelector('.user-score');
const enemyScore = document.querySelector('.bot-score');
const rematchBtn = document.querySelector('.restart-game');

let userScore = 0;
let computerScore = 0;

const possibleMoves = ['rock', 'paper', 'scissors'];
const computerMove = () => {
	const randomMove = Math.floor(Math.random() * possibleMoves.length);
	return possibleMoves[randomMove];
};

const lockButtons = () => {
	buttons.forEach((btn) => (btn.disabled = true));
};

const unlockButtons = () => {
	buttons.forEach((btn) => (btn.disabled = false));
};

const checkWinner = () => {
	if (userScore === 3 && userScore > computerScore) {
		lockButtons();
		result.textContent = 'You won!';
		rematchBtn.classList.add('show');
		return;
	} else if (computerScore === 3 && computerScore > userScore) {
		lockButtons();
		result.textContent = 'You lost!';
		rematchBtn.classList.add('show');
		return;
	}
};

const restartPlayGround = () => {
	userScore = 0;
	computerScore = 0;
	enemyScore.textContent = computerScore;
	myScore.textContent = userScore;
	result.textContent = "Let's start!";
};

const playGround = (playerMove, enemyMove) => {
	switch (true) {
		case playerMove === enemyMove:
			result.textContent = "It's a draw!";
			break;
		case playerMove === 'rock' && enemyMove === 'scissors':
			result.textContent = 'Nice one!';
			userScore++;
			break;
		case playerMove === 'scissors' && enemyMove === 'paper':
			userScore++;
			result.textContent = 'Nice one!';
			break;
		case playerMove === 'paper' && enemyMove === 'rock':
			userScore++;
			result.textContent = 'Nice one!';
			break;
		case playerMove === 'scissors' && enemyMove === 'rock':
			computerScore++;
			result.textContent = 'Better luck next time!';
			break;
		case playerMove === 'paper' && enemyMove === 'scissors':
			computerScore++;
			result.textContent = 'Better luck next time!';
			break;
		case playerMove === 'rock' && enemyMove === 'paper':
			computerScore++;
			result.textContent = 'Better luck next time!';

			break;
	}
	checkWinner();
	enemyScore.textContent = computerScore;
	myScore.textContent = userScore;
};

buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		playGround(btn.id, computerMove());
	});
});

rematchBtn.addEventListener('click', () => {
	unlockButtons();
	restartPlayGround();
	rematchBtn.classList.remove('show');
});
