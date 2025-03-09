let firstCard = 10
let secondCard = 4
let card = [firstCard, secondCard]
let hasBlackjack = false
let isAlive =  true;
let sum = firstCard + secondCard; 

let message = "";
//console.log(sum);

messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardEl = document.querySelector("#card-el");


function startGame() {
    sumEl.textContent = "Sum: "+ sum;
    cardEl.textContent = "Cards: "+ card[0] + " , " + card[1] ;
if (sum <= 20) {
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackjack = true;
} else {
    message = "You're out of the game! "
    isAlive = false;
}


messageEl.textContent = message;
}

if (hasBlackjack) {
    console.log("Cashout!");
}

if (!isAlive) {
    console.log("You are not alive on this game! ")
}
let renderGame = () => {
    startGame();
}

function newCard() {
    //console.log("Drawing a new card from the game the deck!");
    let newCard = 7;
    sum = sum + newCard;
    //startGame();
    renderGame();
}


