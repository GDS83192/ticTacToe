const baseState = function(){
    return [null, null, null, null, null, null, null, null, null];
},

var historyState = []
var currentState, turn


//Methods

//Check if there's a winner

var wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
];
const isWinner = wins.filter.function(win){
    return currentState[win[0]] && 
    currentState[win[0]] === currentState[w[1]] && currentState[win]
}