
const newBtn = document.getElementById("StartOver")

const drawBtn = document.getElementById("DrawMimi")
const drawBtn2 = document.getElementById("DrawPetya")
const MimiPlay = document.getElementById("Mimi-hand")
const PetyaPlay = document.getElementById("Petya-hand")
const resultDisplay = document.getElementById("result")
newBtn.addEventListener("click",game);

let cardsMimi = [];
let cardsPetya = [];

function game(){
    let cardsColors = ['blue', 'red', 'yellow', 'orange', 'green', 'purple', 'white', 'pink', 'gold', 'silver', 'brown', 'black', 'blue', 'red', 'yellow', 'orange', 'green', 'purple', 'white', 'pink', 'gold', 'silver', 'brown'];
    cardsColors.sort(() => Math.random() -0.5)
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
newBtn.classList.toggle("hidden")

cardsMimi = removeDuplicates(cardsMimi).result;
cardsPetya = removeDuplicates(cardsPetya).result;
console.log(cardsMimi);
console.log(cardsPetya);
// we treating this function as an object, bc the f returns an object.
 
 displayCards(cardsMimi, "Mimi")
 displayCards(cardsPetya, "Petya")

}
// removed cardsPetya from the end to test why it is giving me 2 rounds of cards!
drawBtn.addEventListener("click", drawMimi)
drawBtn2.addEventListener("click", drawPetya)
// create new array without the duplicate cards(they must go in a separate deck)
function removeDuplicates(arr) 
{
        let counts = arr.reduce(function(prevItem, currItem)
    {
        prevItem[currItem] = (prevItem[currItem] || 0) + 1;
        return prevItem;
    }, {});
         return Object.keys(counts).reduce(function(arr, item) 
        {
                if (counts[item] === 1) 
            {
                arr.result.push(item);
            }
                else 
                {
                    arr.duplicates.push(item)
                }
                    return arr;
        }, 
                    {
                        duplicates:[],result:[]
                    });
}



function displayCards(displayArray, player)
{ 
  for(let i= 0; i < displayArray.length; i++){
    
  
    let cardDiv = document.createElement("div")
       cardDiv.textContent = displayArray[i]
    //    to dislay the cards with different colors
       cardDiv.style.backgroundColor = displayArray[i]
    //  classList.add("CardContainer")
    //    style that class in css to add color .style! set the style to the name of colors flexbox. style the cards in container with fb
       cardDiv.classList.add('card')
       if (player === "Mimi"){
       MimiPlay.appendChild(cardDiv)}
       else {PetyaPlay.appendChild(cardDiv)}
       
  }
}
    //  classList.add("CardContainer")

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function Mimi draws card from Petya's array
function drawMimi()
{
    let ranCard = Math.floor(Math.random() * cardsPetya.length);
    let card = cardsPetya.splice(ranCard,1)
    cardsMimi.push(card)
    const result =removeDuplicates(cardsMimi)
    cardsMimi = result.result
    removeAllChildNodes(MimiPlay)
    displayCards(cardsMimi, "Mimi")
    removeAllChildNodes(PetyaPlay)
    displayCards(cardsPetya, "Petya")
    winner()
    return card;
}


    // document.getElementById("DrawMimi").onclick = drawMimi
// draw, not draw(), because if I have () it will envokes the function.

// function Petya draws card from Mimi's array
function drawPetya()
{
    let ranCard = Math.floor(Math.random() * cardsMimi.length);
    let card = cardsMimi.splice(ranCard,1)
    cardsPetya.push(card)
    const result = removeDuplicates(cardsPetya)
    cardsPetya = result.result
    removeAllChildNodes(PetyaPlay)
    displayCards(cardsPetya, "Petya")
    removeAllChildNodes(MimiPlay)
    displayCards(cardsMimi, "Mimi")
    winner()
    return card;
}  
     //We added line 125-128 to update the deck of cards for both players after each draw. If we don't do it it will leave one card on the player's deck.

// function winner (the person who matches his cards first)
function winner()
{
    if(cardsMimi.length === 0 && cardsPetya.includes("black"))
    {console.log("mimi")
        resultDisplay.textContent = 'Mimi wins!'
    } 
       else if(cardsPetya.length === 0 && cardsMimi.includes("black"))
    { console.log("petya")
         resultDisplay.textContent = "Petya wins!"
    }else 
    {resultDisplay.textContent = "result" }
}  
//the final else {resultDisplay.textContent="result"} we put in {} so it diplays the final winner after the game is over. 
// DO NOT use innerHTML. Instead use textContent!







