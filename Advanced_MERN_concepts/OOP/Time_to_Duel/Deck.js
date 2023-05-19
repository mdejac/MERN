class Card {
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }

    displayInfo() {
        console.log(this.name,'\nCost:', this.cost);
        return this
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

    displayInfo() {
        super.displayInfo();
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

    displayInfo() {
        super.displayInfo();
        console.log(this.text);
        return this
    }
}

const unit1 = new Unit('Red Belt Ninja', 3, 3, 4);
const effect1 = new Effect('Hard Algorithm', 2, "Increase target's resilience by 3", 'res', 3);
effect1.play(unit1);
const unit2 = new Unit('Black Belt Ninja', 4, 5, 4);
const effect2 = new Effect('Unhandled Promise Rejection', 1, "Decrease target's resilience by 1", 'res', -1);
effect2.play(unit1);
const effect3 = new Effect('Pair Programming', 3, "Increase target's power by 2", 'power', 2);
effect3.play(unit1);
unit1.attack(unit2);

unit1.displayInfo();
unit2.displayInfo();

effect1.displayInfo();
effect2.displayInfo();
effect3.displayInfo();
