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

class User {
    constructor(userName, emailAddress) {
        this.name = userName;
        this.email = emailAddress;
        this.account = []
    }

    _findAccount (name) {
       return this.account.findIndex(el => el.name == name);
    }

    addAccount(name, interestRate, balance) {
        if (this._findAccount(name) === -1){
            const newAccount = new BankAccount(interestRate, balance);
            this.account.push({name:name, account:newAccount});
        } else {
            console.log('Account already on file.');
        }
        return this
    }

    makeDeposit(name, amount) {
        const index = this._findAccount(name);
        if (index != -1){
            this.account[index].account.deposit(amount);
        } else {
            console.log('Account not found');
        }
        return this
    }

    makeWithdrawl(name, amount) {
        const index = this._findAccount(name);
        if (index != -1){
            if (this.account[index].account.balance - amount >= 0){
                this.account[index].account.withdraw(amount);
            } 
        }
        return this
    }

    displayBalance () {
        console.log(`User: ${this.name}`);
        this.account.map(el => el.account.displayAccountInfo());
        return this
    }

    transferMoney (otherUser, otherUserAccountName, accountName, amount) {
        const index = this._findAccount(accountName);
        if (index != -1){
            if (this.account[index].account.balance - amount >= 0){
                this.account[index].account.withdraw(amount);
                otherUser.makeDeposit(otherUserAccountName, amount);
            } else {
                console.log('Insufficient funds.')
            }
        }
        return this
    }
}

const angelo = new User('Angelo Pappas', 'angelopappas@fbi.com');
const utah = new User('Johhny Utah', 'johhnyutah@fbi.com')

angelo.addAccount('checking', .13, 1000000).displayBalance().addAccount('savings', .08, 10000000).makeDeposit('checking', 9).displayBalance();

utah.addAccount('checking', .22, 1000).displayBalance();

angelo.transferMoney(utah, 'savings', 'checking', 9999);

utah.displayBalance();

angelo.addAccount('checking', .99, 900000);