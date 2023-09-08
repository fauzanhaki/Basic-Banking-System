class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        // Simulasi operasi transaksi asynchronous
        setTimeout(() => {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Deposit berhasil. Saldo saat ini: ${this.balance} Rupiah`);
            } else {
                console.log("Jumlah deposit harus lebih dari 0.");
            }
        }, 2000);
    }

    withdraw(amount) {
        // Simulasi operasi transaksi asynchronous
        setTimeout(() => {
            if (amount > 0 && amount <= this.balance) {
                this.balance -= amount;
                console.log(`Penarikan berhasil. Saldo saat ini: ${this.balance} Rupiah`);
            } else {
                console.log("Jumlah penarikan tidak valid atau melebihi saldo.");
            }
        }, 2000);
    }
}

const myAccount = new BankAccount();
myAccount.deposit(1000);
myAccount.withdraw(500);