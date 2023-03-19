// dom selectors

const body = document.body;

let singlePlayerButton = document.querySelector("#single-player-btn");
let twoPlayerButton = document.querySelector("#two-players-btn");
// const playerSelectButton = document.querySelector("#select-players")
const startGameDiv = document.getElementById("start-game-button")
// div dom manipulators
const playerInputDom = document.querySelector("#player-input-dom")
const playerDash = document.querySelector("#player-dash-dom")

const gameDash = document.querySelector("game-dashboard");

let playerOneInput = document.querySelector("#player-one-name");
let playerTwoInput = document.querySelector("#player-two-name");

let startOverButton = document.getElementById('reset-game-btn');
const startGameButton = document.getElementById('start-game-button')

let hidePlayerOneBtns = document.getElementById("single-player-btn")
let hidePlayerTwoBtns = document.getElementById("two-players-btn")


// need a game state data 

let gameData = {
    playerName: [null, null],
    players: ['X', 'O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    gameOver: false,
}


// player button object with event listeners -- need to refactor to forget dry

singlePlayerButton.addEventListener('click', () => {
    playerDash.classList.add("hidden")
    playerOneInput.classList.remove("hidden")
    startGameButton.classList.remove("hidden")
    gameData.playerName[1] = 'Computer';
})


// two players 
twoPlayerButton.addEventListener('click', () => {
    playerDash.classList.add("hidden")
    playerOneInput.classList.remove("hidden")
    playerTwoInput.classList.remove("hidden")
    startGameButton.classList.remove("hidden")
})



// player name submit button
const startGame = () => {
    if (gameData.playerName[1] === 'Computer') {
        gameData.playerName[0] = playerOneInput.value;
        playerInputDom.classList.add("hidden")
        playerOneInput.value = '';
    } else {
        gameData.playerName[0] = playerOneInput.value;
        gameData.playerName[1] = playerTwoInput.value;
        playerInputDom.classList.add("hidden")
        playerOneInput.value = '';
    }
}

// start over button 
const startOver = () => {
    alert('Game has started over!')
    gameData = {
        playerName: [null, null],
        players: ['', ''],
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        gameOver: false,
    }
    playerDash.classList.remove("hidden")
    playerOneInput.classList.add("hidden")
    playerTwoInput.classList.add("hidden")
    playerInputDom.classList.remove("hidden")
    startGameButton.classList.add("hidden")
}


// event listeners  
startGameButton.addEventListener('click', startGame)
startOverButton.addEventListener('click', startOver)

