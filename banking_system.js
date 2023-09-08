class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        setTimeout(() => {
            this.balance += amount;
            console.log(`Deposit of $${amount} successful. New balance: $${this.balance}`);
        }, 2000); // Mensimulasikan operasi asynchronous selama 2 detik
    }

    withdraw(amount) {
        setTimeout(() => {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrawal of $${amount} successful. New balance: $${this.balance}`);
            } else {
                console.log(`Insufficient funds. Current balance: $${this.balance}`);
            }
        }, 2000); // Mensimulasikan operasi asynchronous selama 2 detik
    }
}
