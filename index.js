//et balance = 500.00;

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;//creates object to access
    console.log(this.account);
  }

}

class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
    console.log(this.account);
  }

}
class Account {
  constructor (username) {
  //username
  this.username = username;
  //balance
  this.balance = 0;
  }



}
// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log(myAccount.balance)
