class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email = emailAddress;
        this.accountBalance = 0;
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
        return this
    }

    makeWithdrawl(amount) {
        if (this.accountBalance - amount >= 0){
            this.accountBalance -= amount;
        } else {
            console.log('Insufficient funds.');
        }
        return this
    }

    displayBalance () {
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`)
        return this
    }

    transferMoney (otherUser, amount) {
        if (this.accountBalance - amount >= 0){
            this.makeWithdrawl(amount);
            otherUser.makeDeposit(amount);
        } else {
            console.log('Insufficient funds.')
        }
        return this
    }

}

const rick = new User("Rick Van Python", "rick@python.com");
const jim = new User("Jimmy Dean", "sausage@jimmydean.com");
const goku = new User("Goku", "ultrainstinct@angelic.com");

rick.makeDeposit(100).makeDeposit(500).makeDeposit(500).makeWithdrawl(100).displayBalance();
jim.makeDeposit(1000).makeDeposit(500).makeWithdrawl(100).makeWithdrawl(400).displayBalance();
goku.makeDeposit(5000).makeWithdrawl(100).makeWithdrawl(1000).makeWithdrawl(500).displayBalance();

rick.transferMoney(goku, 500).displayBalance()
goku.displayBalance();
