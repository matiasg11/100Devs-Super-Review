//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, health, speed, specialMove) {
    this.name = name
    this.health = health
    this.speed = speed
    this.specialMove = specialMove
    

    this.throw = function(){
        console.log("Atajate esta")
    }

    this.taunt = function(){
        console.log(`You can't handle my ${this.specialMove}`)
    }

    this.presentYou = function(){
        console.log(`I am ${this.name}, prepare to die!`)
    }
}

let chunLi = new StreetFighter("Chun Li", 100, 99, "I don't know Rick, it looks fake")