// to make a board need to instantiate an object and then do styling on that object with css

const board = document.createElement('div');
board.setAttribute('id,', 'board');
document.body.appendChild('board')
board.innerHTML =   "   |    |     |"
                    "-----------------"
                    "   |    |     |"
                    "-----------------"
                    "   |    |     |"