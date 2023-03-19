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

const cells = document.getElementsByClassName('cell')
const alertsDiv = document.getElementById('alerts')

const boardStatus = document.querySelector("#board")



// need a game state data 

let gameData = {
    playerName: [null, null],
    currentPlayer: null,
    score: [0, 0],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    gameOver: false,
    gameStarted: false,
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


// check win function
const checkWin = () => {
    const winningMoves = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winningMoves.length; i++) {
        const [a, b, c] = winningMoves[i];
        if (cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent && cells[a].textContent !== "") {
            gameData.gameOver = true;
            if (gameData.currentPlayer === 'X') {
                alertsDiv.textContent = `${gameData.playerName[0]} wins!`;
            }
            else {
                alertsDiv.textContent = `${gameData.playerName[1]} wins!`;
            }
            setTimeout(startOver, 5000);
            return true;
        }
    }
    return false;
}


const checkDraw = () => {
    let draw = true;
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            checkWin()
            draw = false;
            break;
        }
    }
    if (draw) {
        const win = checkWin();
        if (!win) {
            alertsDiv.textContent = "Draw!";
            gameData.gameOver = true;
            setTimeout(startOver, 5000);
            return true;
        }
    }
    return false;
}




// 
const switchPlayer = () => {
    if (gameData.currentPlayer === 'X') {
        gameData.currentPlayer = 'O';
        alertsDiv.textContent = `${gameData.playerName[1]}'s turn`;
    } else {
        gameData.currentPlayer = 'X';
        alertsDiv.textContent = `${gameData.playerName[0]}'s turn`;
    }
}

// pc move 

const computerMove = () => {
    //Generate a random index for the computer move
    let index = Math.floor(Math.random() * 9);
    let cell = cells[index];

    // If the chosen cell is already taken, generate a new index until an empty cell is found
    while (cell.textContent !== "") {
        index = Math.floor(Math.random() * 9);
        cell = cells[index];
    }

    // Make the computer move by setting the cell's text content to 'O'
    cell.textContent = gameData.currentPlayer = 'O'
    alertsDiv.textContent = `${gameData.playerName[1]} placed an O at cell ${index + 1}. Now it's ${gameData.playerName[0]}'s turn.`;

    if (checkWin() || checkDraw()) {
        return gameData.gameOver = true;
    } else {
        switchPlayer()
    }
    // checkDraw()

}



// decide on current player function

const decideCurrentPlayer = () => {
    if (Math.random() > 0.5) {
        alertsDiv.textContent = `${gameData.playerName[1]}'s turn`;
        gameData.currentPlayer = "O";
    } else {
        alertsDiv.textContent = `${gameData.playerName[0]}'s turn`;
        gameData.currentPlayer = "X";
    }
    if (gameData.playerName[1] === "Computer" && gameData.currentPlayer === "O") {
        setTimeout(computerMove, 1500);
    }

}


// start game button
const startGame = () => {
    if (gameData.playerName[1] === 'Computer') {
        gameData.playerName[0] = playerOneInput.value;
        playerInputDom.classList.add("hidden")
        playerOneInput.value = '';
    } else {
        gameData.playerName[0] = playerOneInput.value;
        gameData.playerName[1] = playerTwoInput.value;
        playerInputDom.classList.add("hidden")
    }
    decideCurrentPlayer();

    // Help from Tuyen vvvvvv 
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", () => {
            if (!gameData.gameOver && cells[i].textContent === "") {
                cells[i].textContent = gameData.currentPlayer;
                let win = checkWin();
                let draw = checkDraw();
                if (!win && !draw) {
                    switchPlayer();
                    if (gameData.playerName[1] === "Computer" && gameData.currentPlayer === 'O' && !gameData.gameOver) {
                        setTimeout(computerMove, 1500);
                    }
                }
            }
        })
    }
}

// start over button 
const startOver = () => {
    alertsDiv.textContent = '';
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }

    gameData = {
        playerName: [null, null],
        currentPlayer: null,
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
    playerOneInput.value = '';
    playerTwoInput.value = '';
    alert("The game has restarted!")
}


// event listeners  
startGameButton.addEventListener('click', startGame)
startOverButton.addEventListener('click', startOver)