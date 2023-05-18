class BankAccount {
    constructor(intRate, balance) {
        this.interestRate = intRate;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this
    }

    withdraw(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
        } else {
            console.log('Insufficient funds. You will be charged a $5 dollar fee.');
            this.balance -= 5;
        }
        return this
    }

    displayAccountInfo() {
        console.log(`Balance: $${this.balance}`);
        console.log(`Interest rate: $${this.interestRate}`);
        return this
    }

    yieldInterest() {
        if (this.balance > 0) {
            this.balance += this.balance * this.interestRate;
        }
        return this
    }
}


const account1 = new BankAccount(.03, 10000);
const account2 = new BankAccount(.08, 25000);

account1.deposit(500).deposit(500).deposit(500).withdraw(1000).yieldInterest().displayAccountInfo();
account2.deposit(500).deposit(500).withdraw(500).withdraw(1000).withdraw(1000).withdraw(1000).yieldInterest().displayAccountInfo();