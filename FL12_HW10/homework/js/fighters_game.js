let f1 = '';
let f2 = '';

function Fighter(characteristics) {
    let number100 = 100;
    let maxHp = characteristics.hp;
    let wins = 0;
    let loss = 0;
    return {
        getName() {
            return characteristics.name;
        },
        getDamage() {
            return characteristics.damage;
        },
        getStrength() {
            return characteristics.strength;  
        },
        getAgility() {
            return characteristics.agility;
        },
        getHealth() {
            return characteristics.hp;
        },
        dealDamage(damageHp) {
            characteristics.hp = characteristics.hp - damageHp < 0 ? 0 : characteristics.hp - damageHp;
            return characteristics.hp;
        },
        logCombatHistory() {
            console.log(`Name: ${characteristics.name}, Wins: ${wins}, Losses: ${loss}`);
        },
        heal(addHp) {
            characteristics.hp = characteristics.hp + addHp > maxHp ? maxHp : characteristics.hp + addHp;
        },
        addWin() {
            return ++wins;
        },
        addLoss() {
            return ++loss;
        },
        attack(defender) {
            let fighter1IsDefender = defender === f1;
            if (fighter1IsDefender) {
                kindOfAttack(f1, f2);
            } else {
                kindOfAttack(f2, f1);
            } 
            function kindOfAttack(defender, attacker) {
                let dstTarget = Math.floor(Math.random() * number100) + 1;
                let successedAttack = number100 - (defender.getStrength() + defender.getAgility());
                if (successedAttack < dstTarget) {
                    defender.dealDamage(attacker.getDamage());
                    console.log(`${attacker.getName()} makes ${attacker.getDamage()} damage to ${defender.getName()}`);
                } else {
                    console.log(`${attacker.getName()} attack missed`);
                }
            }
        }
    }
}

function battle(fighter1, fighter2) {
    f1 = fighter1;
    f2 = fighter2;
    if (f1.getHealth() === 0) {
        console.log(`${f1.getName()} is Dead † and can't fight`)
    } else if (f2.getHealth() === 0){
        console.log(`${f2.getName()} is Dead † and can't fight`)
    } else {
        console.log(`Let's go the battle`);
        //Code of Battle
        while(f1.getHealth() !== 0 && f2.getHealth() !== 0) {
            f1.attack(f2);
            f2.attack(f1);
        }
        let hpWinner = f1.getHealth() | f2.getHealth();
        let winner = hpWinner === f1.getHealth() ? f1 : f2;
        let looser = hpWinner !== f1.getHealth() ? f1 : f2;
        //add point to winner's WINS
        winner.addWin();
        //add point to looser's LOOSES
        looser.addLoss();
        //logging in console Winner's name & Game over
        console.log(`${winner.getName()} has won!`);
        console.log(`Game over`);
    }
}

const myFighter = new Fighter({name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20});

console.log(battle(myFighter, myFighter2));
