var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself;
myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["asdf", "asdfasdf"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
