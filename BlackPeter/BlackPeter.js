
const newBtn = document.getElementById("StartOver")
const drawBtn = document.getElementById("Draw card-Mimi")
const drawBtn2 = document.getElementById("Draw card-Petya")
const MimiPlay = document.getElementById("Mimi-hand")
const PetyaPlay = document.getElementById("Petya-hand")




 class Card
{ constructor(color){
    // this.name = name;
    this.color = color;
    // this.image = image;
}
}

// Create 3 arrays - one with all the cards and 2 for each player
let cardsColors = ['red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink', 'black','red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink'];
let cardsMimi = [];
let cardsPetya = [];
function game(){
for(let i=0; i < cardsColors.length; i++)
{
    if(i % 2 === 0)
    {cardsMimi.push(new Card(cardsColors[i]))}
    else
    {
        cardsPetya.push(new Card(cardsColors[i]))
    }
}

console.log(cardsMimi);
console.log(cardsPetya);
}
// function Mimi draw card
function MimiDraw(num){
    let ranNum = Math.floor(Math.random() * num);
    return ranNum;
}
document.getElementById("Draw card-Mimi").onclick = function()
{
    // 8 or 9 cards. One player will have 9
    let index = getRandom(8);
    let currentCard = cardsPetya[index];

    // document.getElementById("Mimi-deck").innerHTML = "#" +  currentCard.image + currentCard.color

};

// / create function to check mathing cards
function checkCard()
{
    let currentCard = cardsMimi[]
    document.getElementById().innerHTML = cards.includes(currentCard);
}



// check if player has matchng card



// function Petya draw card



// check if player has matchng card




// function winner (the person who matches his cards first)
// function winner()
// {
//     if( )
// }

// display loser (the person with Black Peter card)







