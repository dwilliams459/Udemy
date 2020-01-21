type BankAccount = { money: number, deposit: ( value: number ) => void }

let bankAccount: BankAccount = {
    money: 2000,
    deposit (value: number) {
        this.money += value;
    }
};

let myself: {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
};

myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["asdf", "asdfasdf"]

}

myself.bankAccount.deposit(3000);
console.log(myself);
