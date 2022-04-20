
const newBtn = document.getElementById("StartOver")
const drawBtn = document.getElementById("Draw card-Mimi")
const drawBtn2 = document.getElementById("Draw card-Petya")
const MimiPlay = document.getElementById("Mimi-hand")
const PetyaPlay = document.getElementById("Petya-hand")

document.addEventListener("click",game);
 drawBtn.addEventListener("click",function(event){
     const result = draw(cardsMimi, cardsPetya)
 })
 drawBtn2.addEventListener("click",function(event){
  const result = draw(cardsPetya, cardsMimi)
})


// Create 3 arrays - one with all the cards and 2 for each player

let cardsMimi = [];
let cardsPetya = [];

function game(){
    let cardsColors = ['red', 'red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink', 'black','red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink'];
for(let i=0; i < cardsColors.length; i++)
{
    if(i % 2 === 0)
    {
        cardsMimi.push(cardsColors[i])
    }
    else
    {
        cardsPetya.push(cardsColors[i])
    }
}

console.log(cardsMimi);
console.log(cardsPetya);
let MimiUniqueArray = removeDuplicates(cardsMimi);
let PetyaUniqueArray = removeDuplicates(cardsPetya);
 console.log(MimiUniqueArray)
}
// function draw card
function draw(self, opponent){
    let ranCard = Math.floor(Math.random() * opponent.length);
  
// 1. get your random card index (done)
// 2. use the javascript splice array method to grab the correct card and push it into the other array.
// 3. run removeduplicates on the player's array.
// 4. create a new object with both self and opponent arrays in it
// // 5. when you call the draw function set the arrays that were used to the new values




}
document.getElementById("Draw-card-Mimi").onclick = draw
// draw not draw(), because if I have () it will envokes the function.

// create new array without the duplicate cards. It does not fill the arrays with cards after it removes the duplicates!?We

   function removeDuplicates(arr) {
  let counts = arr.reduce(function(prevItem, currItem) {
    prevItem[currItem] = (prevItem[currItem] || 0) + 1;
    return prevItem;
  }, {});
  return Object.keys(counts).reduce(function(arr, item) {
    if (counts[item] === 1) {
      arr.result.push(item);
    }
    else{arr.duplicates.push(item)
    }
    return arr;
  }, {
    duplicates:[],result:[]
  });
}

  
 
//   document.getElementById("Mimi-deck").textContent = JSON.stringify(newArr);






// function Petya draw card



// check if player has matchng card




// function winner (the person who matches his cards first)
// function winner()
// {
//    return  
// }

// display loser (the person with Black Peter card)







