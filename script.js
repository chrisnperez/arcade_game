// dom selectors

const body = document.body;


let singlePlayerButton = document.querySelector("#single-player-btn");
let twoPlayerButton = document.querySelector("#two-players-btn");
const playerSelectButton = document.querySelector("#select-players")

const playerInputDom = document.querySelector("#player-input-dom")
const playerDash = document.querySelector("#player-dash-dom")

const hiddenToggle = document.querySelector("#hidden");


let PShiddenToggle = document.querySelector("#select-players")
// hiddenToggle.style.display = "none";
// PShiddenToggle.style.display = "none";
let playerInput = document.querySelector("#player-one-name");
let subButton = document.querySelector("#name-sub");
let div = document.getElementsByClassName("#player-input")




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


const selectPlayersButton = document.createElement("button"); 
        selectPlayersButton.id ="player-one-name";
        selectPlayersButton.textContent="Select Players"

// player button object with event listeners -- need to refactor to forget dry
const playerButtonObj = {
    singlePlayer: singlePlayerButton.addEventListener('click', () => {
        singlePlayerButton.remove();
        twoPlayerButton.remove();
        playerDash.append(selectPlayersButton)
        gameData.players[0] = 'X';
        gameData.players[1] = 'Computer';
    }),
    twoPlayers: twoPlayerButton.addEventListener('click', () => {
        singlePlayerButton.remove();
        twoPlayerButton.remove();
        playerDash.append(selectPlayersButton)
        gameData.players[0] = 'X';
        gameData.players[1] = 'O';
    }),
    back: selectPlayersButton.addEventListener('click', () => {
        playerDash.prepend(singlePlayerButton, twoPlayerButton);
        selectPlayersButton.remove()
    })
}

// player name submit 

const selectPlayers = () => {
    if (gameData.players[1] === 'Computer') {
        gameData.playerName[0] = playerInput.value;
        console.log(gameData.playerName[0]);
        playerDash.remove();
        playerInputDom.remove();
    } gameData.playerName[1] = playerInput.value;
    PShiddenToggle.style.display = "hidden"
}



// event listeners  
subButton.addEventListener('click', selectPlayers)


// push that data itno the game state data


// check win function
// create win scenarios

// event listener for clicks
// store that date into the game state data

// reset game button function
// event listener 


// 


// 