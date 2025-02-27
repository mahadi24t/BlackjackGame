let firstCard = 5
let secondCard = 8

let sum = firstCard + secondCard; 

//console.log(sum);

if (sum < 21) {
    console.log("You have a sum of " + sum + ". You need to draw a card");
} else if(sum === 21) {
    console.log("You have a sum of " + sum + ". You have a Blackjack");
}
else if(sum > 21){
    console.log("You have a sum of " + sum + ". You have busted");
}