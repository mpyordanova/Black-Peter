
const newBtn = document.getElementById("StartOver")
const drawBtn = document.getElementById("Draw card-Mimi")
const drawBtn2 = document.getElementById("Draw card-Petya")
const MimiPlay = document.getElementById("Mimi-hand")
const PetyaPlay = document.getElementById("Petya-hand")

// Removed it because it runs the game function twice loads the arrays twice.
// document.addEventListener("click",game);
 


// Create 3 arrays - one with all the cards and 2 for each player

let cardsMimi = [];
let cardsPetya = [];

function game(){
    let cardsColors = ['red', 'red', 'orange', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink', 'black','red', 'orange', 'blue', 'green', 'purpule', 'yellow', 'white', 'pink'];
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
 console.log(MimiUniqueArray);
 console.log(PetyaUniqueArray);
}
// removed cardsPetya from the end to test why it is giving me 2 rounds of cards!
drawBtn.addEventListener("click",function(event){const result = draw(cardsMimi, cardsPetya)})
drawBtn2.addEventListener("click",function(event){const result = draw(cardsPetya, cardsMimi)})
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

// function Mimi draws card from Petya's array
function drawMimi()
{
    let ranCard = Math.floor(Math.random() * cardsPetya.length);
    let card = cardsPetya.splice(ranCard,1)
    cardsMimi.push(card)
    const result = removeDuplicates(cardsMimi)
    cardsMimi = result.result
    return card;
}
    console.log(draw(cardsPetya))

    document.getElementById("Draw-card-Mimi").onclick = draw
// draw not draw(), because if I have () it will envokes the function.

// function Petya draws card from Mimi's array
function drawPetya()
{
    let ranCard = Math.floor(Math.random() * cardsMimi.length);
    let card = cardsMimi.splice(ranCard,1)
    cardsPetya.push(card)
    const result = removeDuplicates(cardsPetya)
    cardsPetya = result.result
    return card;
}  
    console.log(draw(cardsMimi))

    document.getElementById("Draw-card-Petya").onclick = draw



  
 
//   document.getElementById("Mimi-deck").textContent = JSON.stringify(newArr);






// function Petya draw card



// check if player has matchng card




// function winner (the person who matches his cards first)
// function winner()
// {
//    return  
// }

// display loser (the person with Black Peter card)







