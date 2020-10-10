/* //Research Links
//1) https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern?ref=hackernoon.com
//2) https://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript
//3) https://eloquentjavascript.net/15_event.html' -- Got Remove Event Listener from this.
//4) https://stackoverflow.com/questions/28610365/how-can-i-add-an-event-for-a-one-time-click-to-a-function -- From this got {once: true}

// to make a board need to instantiate an object and then do styling on that object with css

const boardCell = document.createElement('div');
const board = document.createElement('div')
boardCell.innerHTML = `
                         ____                        
                        |    |
                        |____|
                      `

function makeBoard() {
    const board = document.createElement('div');
    board.setAttribute('class', 'boardContainer')
    document.body.appendChild(board)
    for (i = 0; i < 10; i++) {
        const boardCell = document.createElement('div');
        boardCell.innerHTML = `
                         ____                        
                        |    |
                        |____|
                      `
        board.appendChild(boardCell)
        boardCell.setAttribute('class', 'board')
        boardCell.setAttribute('id', `board${[i + 1]}`)
    }
}

makeBoard();
// const board2 = document.createElement('div');
// const board3 = document.createElement('div');
// const board4 = document.createElement('div');
// const board5 = document.createElement('div');
// const board6 = document.createElement('div');
// const board7 = document.createElement('div');
// const board8 = document.createElement('div');
board.setAttribute('id', 'board');
// document.body.appendChild('board')
// board.innerHTML =   "   |    |     |"
//                     -----------------"
//                     "   |    |     |"
//                     "-----------------"
//                     "   |    |     |" */

class Player {
    constructor(name, symbol) {
        this.name = name
        this.symbol = symbol
    }
}

const player1 = new Player("player1", "X")
const player2 = new Player("player2", "O")

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', () => {
    alert('X goes first!')
}, { once: true });
// function choosesSymbol() {


//     const choosesX = document.getElementById('chooseX')
//     const choosesO = document.getElementById('chooseO')

//     choosesX.addEventListener('click', () => {
//         if (event.target == choosesO) {
//             player1.name = "player1"
//             player1.symbol = "O"
//             player2.name = "player2"
//             player2.symbol = "X"
//             alert('player 1 goes first!')
//         } else
//             player1.name = "player1"
//         player1.symbol = "X"
//         player2.name = "player2"
//         player2.symbol = "O"
//         alert('player 1 goes first!')
//     }, { once: true });


//     choosesO.addEventListener('click', () => {
//         if (choosesX()) {
//             player1.name = "player1"
//             player1.symbol = "X"
//             player2.name = "player2"
//             player2.symbol = "O"
//             alert('player 1 goes first!')
//         } else {
//             player1.name = "player1"
//             player1.symbol = "O"
//             player2.name = "player2"
//             player2.symbol = "O"
//             alert('player 1 goes first!')
//         }
//     }, { once: true });
// }

// choosesSymbol();

//Need to find out if it's a bad idea to put all event listeners and all these variables inside a function. MVP is complete and will review scope to make this better


// const checkForSym = document.querySelector('.game-board')
// const symCheck = () => {
//     if (player1.symbol == " ") {
//         alert('please choose x or o')
//     }
// }

function userMoves() {

    const box1 = document.getElementById('box1')
    const box2 = document.getElementById('box2')
    const box3 = document.getElementById('box3')
    const box4 = document.getElementById('box4')
    const box5 = document.getElementById('box5')
    const box6 = document.getElementById('box6')
    const box7 = document.getElementById('box7')
    const box8 = document.getElementById('box8')
    const box9 = document.getElementById('box9')



    let turnCounter = 0;


    const trackTurnFunc = () => {
        const guiCountTrack = document.createElement('div')
        guiCountTrack.setAttribute('class', 'tracker')
        document.body.appendChild(guiCountTrack)
        if (turnCounter % 2 == 0) {
            guiCountTrack.innerHTML = "Player 1's Turn"

        } else {
            guiCountTrack.innerHTML = "Player 2's turn"
        }
    }



    box1.addEventListener('click', () => {


        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box1.innerHTML = 'O'
            } else {
                box1.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box1.innerHTML = "O"
            if (player1.symbol == "O") {
                box1.innerHTML = 'X'
            } else {
                box1.innerHTML = 'O'
            }

        }
        turnCounter++
        trackTurnFunc();

    }, { once: true });


    box2.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box2.innerHTML = 'O'
            } else {
                box2.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box2.innerHTML = "O"
            if (player1.symbol == "O") {
                box2.innerHTML = 'X'
            } else {
                box2.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc();
    }, { once: true });

    box3.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box3.innerHTML = 'O'
            } else {
                box3.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box3.innerHTML = "O"
            if (player1.symbol == "O") {
                box3.innerHTML = 'X'
            } else {
                box3.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc()
    }, { once: true });
    box4.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box4.innerHTML = 'O'
            } else {
                box4.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box4.innerHTML = "O"
            if (player1.symbol == "O") {
                box4.innerHTML = 'X'
            } else {
                box4.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc()
    }, { once: true });
    box5.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box5.innerHTML = 'O'
            } else {
                box5.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box5.innerHTML = "O"
            if (player1.symbol == "O") {
                box5.innerHTML = 'X'
            } else {
                box5.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc()
    }, { once: true });

    box6.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box6.innerHTML = 'O'
            } else {
                box6.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box6.innerHTML = "O"
            if (player1.symbol == "O") {
                box6.innerHTML = 'X'
            } else {
                box6.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc()
    }, { once: true });
    box7.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box7.innerHTML = 'O'
            } else {
                box7.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box7.innerHTML = "O"
            if (player1.symbol == "O") {
                box7.innerHTML = 'X'
            } else {
                box7.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc()
    }, { once: true });
    box8.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box8.innerHTML = 'O'
            } else {
                box8.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box8.innerHTML = "O"
            if (player1.symbol == "O") {
                box8.innerHTML = 'X'
            } else {
                box8.innerHTML = 'O'
            }
        }


        turnCounter++
        trackTurnFunc()
    }, { once: true });
    box9.addEventListener('click', () => {

        if (turnCounter % 2 == 0) {
            if (player1.symbol == "O") {
                box9.innerHTML = 'O'
            } else {
                box9.innerHTML = 'X'
            }
        } else if (turnCounter % 2 !== 0) {
            // box9.innerHTML = "O"
            if (player1.symbol == "O") {
                box9.innerHTML = 'X'
            } else {
                box9.innerHTML = 'O'
            }
        }
        turnCounter++
        trackTurnFunc()
    }, { once: true });


}
userMoves();

//adding function to check for win

function checkForXWin() {

    const resetCountDiv = document.querySelectorAll('.tracker')

    if ((box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") || //top row horizontal
        (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") || //middle row horizontal
        (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") || //bottom row horizontal
        (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") || //first column vertical

        (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") || //middle column vertical
        (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") || //end column vertical
        (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") || //diagonal
        (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X")) { //diagonal

        alert('game over, X Wins!')
        box1.innerHTML = ""
        box2.innerHTML = ""
        box3.innerHTML = ""
        box4.innerHTML = ""
        box5.innerHTML = ""
        box6.innerHTML = ""
        box7.innerHTML = ""
        box8.innerHTML = ""
        box9.innerHTML = ""
        turnCounter = 0
            // const newReset = Array.from(resetCountDiv)
            // console.log(newReset);
        console.log(resetCountDiv);
        resetCountDiv.forEach(element => {
            element.innerHTML = ''
        })
        userMoves();
    } else if (

        (box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") || //top row horizontal
        (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") || //middle row horizontal
        (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") || //bottom row horizontal
        (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") || //first column vertical

        (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") || //middle column vertical
        (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") || //end column vertical
        (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") || //diagonal
        (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O")) {






        alert('game over, O Wins!')
        box1.innerHTML = ""
        box2.innerHTML = ""
        box3.innerHTML = ""
        box4.innerHTML = ""
        box5.innerHTML = ""
        box6.innerHTML = ""
        box7.innerHTML = ""
        box8.innerHTML = ""
        box9.innerHTML = ""
        turnCounter = 0
        resetCountDiv.forEach(element => {
            element.innerHTML = ''
        })
        userMoves();
    } else if (
        box1.innerHTML !== "" && box2.innerHTML !== "" && box3.innerHTML !== "" && box4.innerHTML !== "" && box5.innerHTML !== "" && box6.innerHTML !== "" && box7.innerHTML !== "" && box8.innerHTML !== "" && box9.innerHTML !== ""
    ) {
        alert('game over, its a tie!')
        box1.innerHTML = ""
        box2.innerHTML = ""
        box3.innerHTML = ""
        box4.innerHTML = ""
        box5.innerHTML = ""
        box6.innerHTML = ""
        box7.innerHTML = ""
        box8.innerHTML = ""
        box9.innerHTML = ""
        turnCounter = 0
        resetCountDiv.forEach(element => {
            element.innerHTML = ''
        })
        userMoves();
    }
}




setInterval(checkForXWin, 100);