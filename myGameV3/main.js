//Make a board class to save game state
class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}




const player1 = new Player('player1,', 'X')
const gameBoxes = document.querySelectorAll('.gameBox') //Individual Game Boxes Object
const counterDiv = document.querySelector('#counterDiv'); //Div for Turn tracking
const board = document.querySelector('.boardGrid'); //For selecting entire board
const startButton = document.querySelector('#startButton'); //Start Button
const chooseX = document.querySelector('#chooseX') //X button
const chooseO = document.querySelector('#chooseO') //O button
const choiceButtons = document.querySelectorAll('.XorObutton'); //Selector for both buttons
const indBoxes = Array.from(document.querySelectorAll('.gameBox')) // Individual Game boxes array



const startGame = () => { // click Start. Says "Begin!" if new game indicated by counter at 0, otherwise alerts game is already underway
    if (counter == 0) {
        (alert('X Goes First'))

    } else {
        alert('Game is already underway')
    }
}






const fillInBoxes = () => {
    if (counter % 2 !== 0) {
        if (player1.symbol == "O" && event.target.innerHTML == "") {
            event.target.innerHTML = "X"

        } else if (player1.symbol == "X" && event.target.innerHTML == "") {
            event.target.innerHTML = "O"

        }
    } else if (counter % 2 == 0) {
        if (player1.symbol == "X" && event.target.innerHTML == "") {
            event.target.innerHTML = "X"

        } else if (player1.symbol == "O" && event.target.innerHTML == "") {
            event.target.innerHTML = "O"

        }
    }
    counter++

}

let counter = 0

indBoxes.forEach(box => {

    box.addEventListener('click', fillInBoxes)
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


const winCheckTrack = () => {

    if ((gameBoxes[0].innerHTML === "X" && gameBoxes[1].innerHTML === "X" && gameBoxes[2].innerHTML === "X") ||
        (gameBoxes[3].innerHTML === "X" && gameBoxes[4].innerHTML === "X" && gameBoxes[5].innerHTML === "X") ||
        (gameBoxes[6].innerHTML === "X" && gameBoxes[7].innerHTML === "X" && gameBoxes[8].innerHTML === "X") ||
        (gameBoxes[0].innerHTML === "X" && gameBoxes[4].innerHTML === "X" && gameBoxes[8].innerHTML === "X") ||
        (gameBoxes[0].innerHTML === "X" && gameBoxes[3].innerHTML === "X" && gameBoxes[6].innerHTML === "X") ||
        (gameBoxes[1].innerHTML === "X" && gameBoxes[4].innerHTML === "X" && gameBoxes[7].innerHTML === "X") ||
        (gameBoxes[2].innerHTML === "X" && gameBoxes[6].innerHTML === "X" && gameBoxes[8].innerHTML === "X") ||
        (gameBoxes[0].innerHTML === "X" && gameBoxes[4].innerHTML === "X" && gameBoxes[8].innerHTML === "X") ||
        (gameBoxes[2].innerHTML === "X" && gameBoxes[4].innerHTML === "X" && gameBoxes[6].innerHTML === "X"))


    {
        alert("game over X wins!")
        gameBoxes.forEach(box => {
            box.innerHTML = ""
            counterDiv.innerHTML = ""

            counter = 0
        })
    } else if ((gameBoxes[0].innerHTML === "O" && gameBoxes[1].innerHTML === "O" && gameBoxes[2].innerHTML === "O") ||
        (gameBoxes[3].innerHTML === "O" && gameBoxes[4].innerHTML === "O" && gameBoxes[5].innerHTML === "O") ||
        (gameBoxes[6].innerHTML === "O" && gameBoxes[7].innerHTML === "O" && gameBoxes[8].innerHTML === "O") ||
        (gameBoxes[0].innerHTML === "O" && gameBoxes[4].innerHTML === "O" && gameBoxes[8].innerHTML === "O") ||
        (gameBoxes[0].innerHTML === "O" && gameBoxes[3].innerHTML === "O" && gameBoxes[6].innerHTML === "O") ||
        (gameBoxes[1].innerHTML === "O" && gameBoxes[4].innerHTML === "O" && gameBoxes[7].innerHTML === "O") ||
        (gameBoxes[2].innerHTML === "O" && gameBoxes[6].innerHTML === "O" && gameBoxes[8].innerHTML === "O") ||
        (gameBoxes[0].innerHTML === "O" && gameBoxes[4].innerHTML === "O" && gameBoxes[8].innerHTML === "O") ||
        (gameBoxes[2].innerHTML === "O" && gameBoxes[4].innerHTML === "O" && gameBoxes[6].innerHTML === "O"))


    {
        alert("game over O wins!")
            // gameBoxes.forEach(box => {
        gameBoxes.forEach(box => {
            box.innerHTML = ""
            counterDiv.innerHTML = ""
            counter = 0
        })

    } else if (counter == 9) {
        alert('game over, tie!')
        gameBoxes.forEach(box => {
            box.innerHTML = ""
            counterDiv.innerHTML = ""
            counter = 0
        })
    }

}
indBoxes.forEach(box => {

    box.addEventListener('click', winCheckTrack)


})