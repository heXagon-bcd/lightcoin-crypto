//et balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
    this.account.balance += this.value;// value is called from deposit
  }
}
class Deposit extends Transaction {
  get value() {
    return this.amount
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount
  }

}
class Account {
  constructor (username) {
  //username
  this.username = username;
  //balance
  this.balance = 0;
  //transactions
  this.transactions = [];
  }

  // get balance {
  // return this.Account.balance()
  // }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// const myAccount = new Account("snow-patrol");
// t1 = new Withdrawal(50.25, myAccount);
// t1.value();
// console.log(myAccount.balance)

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();
//console.log(myAccount)
console.log('Ending Balance:', myAccount.balance);
