let spaceShip;
let enemyShip;
// create my ship class
class SpaceShipProperty
{
    constructor (hull, firepower, accuracy)
    {
        this.hull = 20;
        this.firepower = 5; 
        this.accuracy = .7;
        this.alive = true;

        attack(target) 
        {
            if(this.accuracy > target.accuracy)
            
        {
            console.log("You hit enemy's ship. Good job guys!")
            target.hull = target.hull - this.firepower;
            console.log("Enemy has ${target.hull} hull remaining. For now...")
        }
            if(target.hull <=0)
            {
                target.alive = false;
                console.log("Another one bites the dust! Lets get this party started! Who wants a beer?")
            }
        
        else { console.log("Dodged the attack")
            }
        }
    };
}
    
    
 
    
// create alien ship class
    class enemyShipProperty
    {
        constructor (hull, firepower, accuracy)
        {
            this.hull = Math.floor(Math.random()* (6 - 3))+ 3;
            this.firepower = Math.floor(Math.random() *2) +2;
            this.accuracy = (Math.random () * (0.8 - 0.6)) + 0.6;
            this.alive = true;
        }
             attack(target) 
             {
                if(this.accuracy > target.accuracy)
                {
                    console.log("Oh, no. Your ship has been hit!")
                    target.hull = target.hull - this.firepower;
                    console.log("You have ${target.hull} hull remaining.")
                    if(target.hull <=0)
                    {
                        target.alive = false;
                        console.log("Looser. You lost the battle. Enemy won.")
                    }
                }
                else {console.log("Dodged the attack")
            }
        };
    }

function spaceCombat(enemyShip, spaceShip)
{
    while (spaceShip.alive && enemyShip.alive)
    {
        spaceship.attack(enemyShip);
        if(enemyShip.alive)
        {
            enemyShip.attack(spaceShip)
        }
        
    }
}
console.log(spaceShip);
console.log(enemyShip);

// create enemy array
let myspaceShip = new SpaceShipProperty()
let enemyFleet = ["EnemyAlpha", "EnemyBeta", "EnemyGama", "EnemyDelta","EnemyOmega", "EnemyEta"];

play = () => 
{
    for(let i=0; i< enemyFleet.length; i++)
    {
        let enemyShip = enemyFleet[i];
        while (myspaceShip.hull > 0 && enemyShip.hull > 0)
        {
            if(myspaceShip.hull > 0) 
            {
              myspaceShip.attack(alienShip);

            }
            if (enemyShip.hull > 0)
            {
                enemyShip.attack (myspaceShip);
            }
            else
            {
                console.log("Enemy ship " + i + " caboom")
            }
        }

    }
   
}

// The end recap


    // class spaceShipStatus extends ship{
    //     constructor (hull, firepower, accuracy){
    //         this.hull = 6;
    //         this.accuracy = .6;
    //         this.alive = true;
    //     }
    // }

    
// check if ship is alive
    // spaceShipStatus() 
   
    //     if (this.hull <= 0){
    //         this.alive = false;}
    //         else{console.log("You are alive! Keep shooting")