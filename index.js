let firstCard = 10
let secondCard = 7
let hasBlackjack = false
let isAlive =  true;
let sum = firstCard + secondCard; 

let message = "";
//console.log(sum);
function startGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackjack = true;
} else {
    message = "You're out of the game! 😭"
    isAlive = false;
}

console.log(message);
}

if (hasBlackjack) {
    console.log("Cashout!");
}

if (!isAlive) {
    console.log("You are not alive on this game! ")
}


