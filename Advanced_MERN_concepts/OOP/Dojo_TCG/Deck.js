class Card {
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, res) {
        super (name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
        return this
    }

    display() {
        console.log('Name :', this.name);
        console.log('Power :', this.power);
        console.log('Resilience :', this.res);
        return this
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;
        } else {
            throw new Error('Target must be a unit.');
        }
        return this
    }
}

const unit1 = new Unit('Red Belt Ninja', 3, 3, 4);
const effect1 = new Effect('Hard Algorithm', 2, "Increase target's resilience by 3", 'res', 3);
const effect2 = new Effect('Co-Pilot', 2, "Decrease target's resilience by 3", 'res', -3);

unit1.display();
effect1.play(unit1);
unit1.display();
effect2.play(unit1);
unit1.display();