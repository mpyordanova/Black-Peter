
const ranNum = (min, max) => 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random () * (max - min +1)) + min;
}

// Create our space ship class
   class SpaceShip
   {
        constructor (name, hull, firepower, accuracy,)
        {
          this.name =name,
          this.hull = 20;
          this.firepower = 5; 
          this.accuracy = .7
        }
        // Attack method by the player
            attack(target) 
           {
               console.log("Attacking the enemy...",);
               {
                 let hitChance = ranNum (1, 10) /10;
                 if (hitChance < this.accuracy)
                   {
                     target.hull -= this.firepower;
                     console.log("You hit the enemy!",);
                   } else 
                   {
                       console.log("You missed the target!",);
                   }
               }
               console.log("Enemy hull:" + target.hull,);
            }   

            // Chance to retreat
                  retreat() 
                {
                    alert("Retreat and create new strategy to kill the enemy")
                }
    };

    // Define player object
    let myShip = new SpaceShip ("USS HelloWorld");

     

    // create alien ship class
   class EnemyShip
    {
        constructor (name, hull, firepower, accuracy)
        {
            this.name = name;
            this.hull = ranNum (3, 6);
            this.firepower = ranNum (2, 4),
            this.accuracy = ranNum (6, 8) / 10     
        }
              enemyAttack(target) 
            {
                     console.log("Enemy attacks...",);
                {
                     let hitChance = ranNum(1, 10) /10;
                     if(hitChance < this.accuracy)
                     {
                         target.hull -= this.firepower;
                         console.log("You have been hit",);
                     }  else
                       {
                            console.log("Enemy missed!",)
                       }
                }

                 console.log("Player hull: " + target.hull,);

            }
    };

    // Create enemy fleet
    let enemyFleet = [];
    for (let i = 0; i < ranNum(6, 13); i++)
    {
        enemy = new EnemyShip();
        enemyFleet.push(enemy);
    }

    
alert("Battle is about to start!")
console.log("Number of enemy ships " + enemyFleet.length),

setTimeout (() =>
{
    for (let i= 0; i < enemyFleet.length; i++)
    {
        let enemyShip = enemyFleet[i];
        while (myShip.hull > 0 && enemyShip.hull > 0)
        {
            if(myShip.hull > 0)
            {
                myShip.attack(enemyShip);
                let response = prompt ("Press OK to continue or TYPE retreat to end game.");
                 if(response.toLowerCase() === "retreat")
                    {
                     myShip.retreat();
                     alert("Please refresh to start a new game");
                    //  alert("Press cancel and refresh the page!");
                     break;
                    }
            }
            if (enemyShip.hull > 0)
            {
             enemyShip.enemyAttack(myShip);
            }     else
               {
                   console.log("Enemy ship" + i + " is destroyed!",);
               }
        }
    } 
   // End of game ship status check
    if(myShip.hull >= 0)
   {
        alert( "You won! Enemy fleet is destroyed");
   }       else
     {
         alert("You died! Try again :(");
     }
}, 500);






