//Research Links
//https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern?ref=hackernoon.com


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
//                     "   |    |     |"