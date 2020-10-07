/* //Research Links
//1) https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern?ref=hackernoon.com
//2) https://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript

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

const player1 = new Player("player1", " ")
const player2 = new Player("player2", " ")

function choosesSymbol() {


    const choosesX = document.getElementById('chooseX')
    const choosesO = document.getElementById('chooseO')

    choosesX.addEventListener('click', () => {

        player1.name = "player1"
        player1.symbol = "X"
        player2.name = "player2"
        player2.symbol = "O"
    })
    choosesO.addEventListener('click', () => {
        player1.name = "player1"
        player1.symbol = "O"
        player2.name = "player2"
        player2.symbol = "X"
    })

}
choosesSymbol();



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

    box1.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box1.innerHTML = 'X'
        } else {
            box1.innerHTML = 'O'
        }
    })


    box2.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box2.innerHTML = 'X'
        } else {
            box2.innerHTML = 'O'
        }
    })

    box3.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box3.innerHTML = 'X'
        } else {
            box3.innerHTML = 'O'
        }
    })

    box4.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box4.innerHTML = 'X'
        } else {
            box4.innerHTML = 'O'
        }
    })

    box5.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box5.innerHTML = 'X'
        } else {
            box5.innerHTML = 'O'
        }
    })

    box6.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box6.innerHTML = 'X'
        } else {
            box6.innerHTML = 'O'
        }
    })

    box7.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box7.innerHTML = 'X'
        } else {
            box7.innerHTML = 'O'
        }
    })

    box8.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box8.innerHTML = 'X'
        } else {
            box8.innerHTML = 'O'
        }
    })

    box9.addEventListener('click', () => {
        if (player1.symbol == "X") {
            box9.innerHTML = 'X'
        } else {
            box9.innerHTML = 'O'
        }
    })
}
userMoves();