// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let card = []
let hasBlackjack = false
let isAlive =  false;
let sum = 0;

let player = {
    name: 'Per',
    chips : 200
}
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name+ ': $'+ player.chips


let message = "";
//console.log(sum);

function getRandomCard() {
    let value = Math.floor(Math.random() * 13) + 1;
    if(value ===1){
        return 11;
    }else if(value === 11|| value ===12 || value ===13){
        return 10;
    }else{
        return value;
    }
}

messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
cardEl = document.querySelector("#card-el");


function renderGame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < card.length; i++) {
        cardEl.textContent+=card[i]+ " ";
    }
    sumEl.textContent = "Sum: "+ sum;
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
let startGame = () => {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    card = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function newCard() {
    //console.log("Drawing a new card from the game the deck!");
    if(isAlive===true && hasBlackjack===false) { 
    let cardNew = getRandomCard();
    sum += cardNew;
    //startGame();
    card.push(cardNew);
    renderGame();
    //
    }
}

