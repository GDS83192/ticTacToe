const cards = Array.from(document.querySelectorAll(".card"));
console.log(cards);
const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

let firstPlayer = [],
    secondPlayer = [],
    count = 0;

function check(array) {
    let finalResult = false;
    for (let item of winner) {
        console.log(item);
        //Item is the full list of possible winning combinations
        let res = item.every(val => array.indexOf(val) !== -1);
        console.log(res)
        console.log(array)
            //array is keeping track of where player has moved
        if (res) {
            finalResult = true;
            console.log(res);
            break;
        }
    }
    console.log(finalResult);
    return finalResult;
}

function winnerPlayer(p) {
    const modal = document.createElement('div');
    console.log(modal);
    const player = document.createTextNode(p);
    console.log(player);
    const replay = document.createElement("button");
    console.log(replay);
    modal.classList.add("winner");
    modal.appendChild(player);
    replay.appendChild(document.createTextNode("Replay"));

    replay.onclick = function() { rep() };
    modal.appendChild(replay);
    document.body.appendChild(modal);
}

function draw() {
    if (this.classList == "card") {
        count++;
        if (count % 2 !== 0) {
            this.classList.add('x');
            firstPlayer.push(Number(this.dataset.index));
            console.log(this.dataset.index);
            if (check(firstPlayer)) {
                winnerPlayer("Congrats player one you win");
                return true;
            }

        } else {
            this.classList.add("o");
            secondPlayer.push(Number(this.dataset.index));
            if (check(secondPlayer)) {
                winnerPlayer("Congrats player two you win")
                return true;
            }
        }
        if (count === 9) {
            winnerPlayer("Draw");
        }
    }
}


function rep() {
    const w = document.querySelector(".winner");

    firstPlayer = [];
    secondPlayer = [];
    count = 0;
    w.remove();
    [].forEach.call(cards, function(el) {
        el.classList.remove("x");
        el.classList.remove("o");
    });
}

cards.forEach(card => card.addEventListener("click", draw));