// Challenge 5 Black Jack Game

let blackjackGame = {
    'you': { 'scoreSpan': '#yourBGresult', 'div': '#your-box', 'score': 0 },
    'dealer': { 'scoreSpan': '#dealerBGresult', 'div': '#dealer-box', 'score': 0 }
};

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector("#hit").addEventListener('click', blackjackhit);


function blackjackhit() {
    showCard();
}

function showCard() {
    let cardImage = document.createElement("img");
    cardImage.src = 'static/images/Q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();
}
