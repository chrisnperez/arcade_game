// dom selectors


let singlePlayerButton = document.querySelector("#single-player-btn");
const hiddenToggle = document.querySelector("#hidden");
let twoPlayerButton = document.querySelector("#two-players-btn");
const playerSelectButton = document.querySelector("#select-players")
let PShiddenToggle = document.querySelector("#select-players")
hiddenToggle.style.display = "none";
PShiddenToggle.style.display = "none";
let playerInput = document.querySelector("#player-one-name");
let subButton = document.querySelector("#name-sub");



// need a game state data 

const gameData = {
    playerName: [null, null],
    players: ['', ''],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}


// player button object with event listeners -- need to refactor to forget dry
const playerButtonObj = {
    singlePlayer: singlePlayerButton.addEventListener('click', () => {
        hiddenToggle.style.display = "flex";
        singlePlayerButton = document.querySelector("#single-player-btn").disabled = true;
        twoPlayerButton = document.querySelector("#two-players-btn").disabled = true;
        PShiddenToggle.style.display = "flex";
        gameData.players[0] = 'X';
        gameData.players[1] = 'Computer';
    }), 
    twoPlayers: twoPlayerButton.addEventListener('click', () => {
        hiddenToggle.style.display = "flex";
        // (hiddenToggle.style.display === "none") ? hiddenToggle.style.display = "flex" : hiddenToggle.style.display = "none"
        twoPlayerButton = document.querySelector("#two-players-btn").disabled = true;
        singlePlayerButton = document.querySelector("#single-player-btn").disabled = true;
        PShiddenToggle.style.display = "flex";
        gameData.players[0] = 'X';
        gameData.players[1] = 'O';
    }), 
    back: playerSelectButton.addEventListener('click', () => {
        PShiddenToggle.style.display = "none";
        hiddenToggle.style.display = "none";
        singlePlayerButton = document.querySelector("#single-player-btn").disabled = false;
        twoPlayerButton = document.querySelector("#two-players-btn").disabled = false;
    })
}

// player name submit 


// event listeners  
subButton.addEventListener('click', () => {
    if (gameData.players[1] === 'Computer') {
        gameData.playerName[0] = playerInput.value;
        PShiddenToggle.style.display = "hidden"
        console.log(gameData.playerName[0]);
    }  gameData.playerName[1] = playerInput.value;
    
    
 })

// push that data itno the game state data


// check win function
// create win scenarios

// event listener for clicks
// store that date into the game state data

// reset game button function
// event listener 


// 


// 