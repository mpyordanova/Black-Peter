
const newBtn = document.getElementById("StartOver")
const drawBtn = document.getElementById("Draw card-Mimi")
const drawBtn2 = document.getElementById("Draw card-Petya")
const MimiPlay = document.getElementById("Mimi-hand")
const PetyaPlay = document.getElementById("Petya-hand")

document.addEventListener("click",game());




// Create 3 arrays - one with all the cards and 2 for each player

let cardsMimi = [];
let cardsPetya = [];

function game(){
    let cardsColors = ['red', 'red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink', 'black','red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink'];
for(let i=0; i < cardsColors.length; i++)
{
    if(i % 2 === 0)
    {cardsMimi.push(cardsColors[i])}
    else
    {
        cardsPetya.push(cardsColors[i])
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
document.getElementById("Draw-card-Mimi").onclick = function()
{
    // 8 or 9 cards. One player will have 9
    let index = getRandom(cardsPetya.length);
    let currentCard = cardsPetya[index];
    cardsMimi.push(currentCard);
    // document.getElementById("Mimi-deck").innerHTML = "#" +  currentCard.image + currentCard.color

};

// create new array without the duplicate cards. It does not fill the arrays with cards after it removes the duplicates!?
function removeDuplicates(arr) {
    let counts = arr.reduce(function(counts, item) {
      counts[item] = (counts[item] || 0) + 1;
      return counts;
    }, {});
    return Object.keys(counts).reduce(function(arr, item) {
      if (counts[item] === 1) {
        arr.push(item);
      }
      return arr;
    }, []);
  }
  
  let MimiUniqueArray = removeDuplicates(cardsMimi);
  let PetyaUniqueArray = removeDuplicates(cardsPetya);
   console.log(MimiUniqueArray)
//   document.getElementById("Mimi-deck").textContent = JSON.stringify(newArr);






// function Petya draw card



// check if player has matchng card




// function winner (the person who matches his cards first)
// function winner()
// {
//    return  
// }

// display loser (the person with Black Peter card)







