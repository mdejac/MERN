class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Hello, My name is ${this.name}.`);
        return this
    }

    showStats() {
        console.log('Name : ', this.name);
        console.log('Health :', this.health);
        console.log('Speed : ', this.speed);
        console.log('Strength : ', this.strength);
        return this
    }

    drinkSake() {
        this.health += 10;
        return this
    }
}


const hiro = new Ninja('Hiro');
const ninja1 = new Ninja("Hyabusa", 115);

hiro.sayName().showStats().drinkSake().showStats();
ninja1.sayName().showStats().drinkSake().showStats();