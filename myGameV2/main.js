//Make a board class to save game state
class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}

class Board {
    constructor(state) {
        this.state = []
    }
}


const player1 = new Player('player1,', ' ')
const gameBoxes = document.querySelectorAll('.gameBox') //Individual Game Boxes Object
const counterDiv = document.querySelector('#counterDiv'); //Div for Turn tracking
const board = document.querySelector('.boardGrid'); //For selecting entire board
const startButton = document.querySelector('.startButton'); //Start Button
const chooseX = document.querySelector('#chooseX') //X button
const chooseO = document.querySelector('#chooseO') //O button
const choiceButtons = document.querySelectorAll('.XorObutton'); //Selector for both buttons
const indBoxes = Array.from(document.querySelectorAll('.gameBox')) // Individual Game boxes array

const chooseXorO = () => { //Player 1 chooses symbol. Call 
    if (event.target == chooseX) {
        player1.symbol = "X"
    } else if (event.target == chooseO) {
        player1.symbol = "O"
    }
}

const startGame = () => { // click Start. Says "Begin!" if new game indicated by counter at 0, otherwise alerts game is already underway
    if (counter == 0) {
        (alert('Begin!'))

    } else {
        alert('Game is already underway')
    }
}

choiceButtons.forEach(button => { //If the game is starting, indicated by counter at 0, player can choose x or o
    addEventListener('click', event => {
        if (counter == 0) {
            chooseXorO();
        }
    })
});




const fillInBoxes = () => {
    if (counter % 2 !== 0) {
        if (player1.symbol == "O") {
            event.target.innerHTML = "X"

        } else if (player1.symbol == "X") {
            event.target.innerHTML = "O"

        }
    } else if (counter % 2 == 0) {
        if (player1.symbol == "X") {
            event.target.innerHTML = "X"

        } else if (player1.symbol == "O") {
            event.target.innerHTML = "O"

        }
    }
    counter++

}

let counter = 0

indBoxes.forEach(box => {
    console.log(indBoxes);
    box.addEventListener('click', fillInBoxes, { once: true })
    box.addEventListener('click', event => {
        if (counter % 2 == 0) {
            counterDiv.innerHTML = "Player 1 Turn"

        } else if (counter % 2 !== 0) {
            counterDiv.innerHTML = "Player 2 Turn"
        }

    })
})

// gameBox.addEventListener('click', clickBox)
// gameBox.addEventListener('click', moveTracker)
// gameBox.addEventListener('click', counterUp)
// 
// });
startButton.addEventListener('click', startGame)

let gameState = [];

const winCheckTrack = () => {
    gameState.push(event.target.innerHTML)
    if ((gameState[0] === "X" && gameState[1] === "X" && gameState[2] === "X") ||
        (gameState[3] === "X" && gameState[4] === "X" && gameState[5] === "X") ||
        (gameState[6] === "X" && gameState[7] === "X" && gameState[8] === "X") ||
        (gameState[0] === "X" && gameState[4] === "X" && gameState[6] === "X") ||
        (gameState[1] === "X" && gameState[5] === "X" && gameState[7] === "X") ||
        (gameState[2] === "X" && gameState[6] === "X" && gameState[8] === "X") ||
        (gameState[0] === "X" && gameState[4] === "X" && gameState[8] === "X") ||
        (gameState[0] === "X" && gameState[2] === "X" && gameState[4] === "X") ||
        (gameState[2] === "X" && gameState[4] === "X" && gameState[6] === "X"))


    {
        alert("game over X wins!")
        gameBoxes.forEach(box => {
            box.innerHTML = " "
            counterDiv.innerHTML = ""
        })
        counter = 0
    }
}
indBoxes.forEach(box => {

    box.addEventListener('click', winCheckTrack)
    console.log(gameState);

})