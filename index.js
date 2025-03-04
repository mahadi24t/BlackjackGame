let firstCard = 10
let secondCard = 7
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
    cardEl.textContent = "Cards: "+ firstCard + " , " + secondCard;
if (sum <= 20) {
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackjack = true;
} else {
    message = "You're out of the game! "
    isAlive = false;
}

//console.log(message);
messageEl.textContent = message;
}

if (hasBlackjack) {
    console.log("Cashout!");
}

if (!isAlive) {
    console.log("You are not alive on this game! ")
}

function newCard() {
    console.log("Drawing a new card from the game the deck!");
}


