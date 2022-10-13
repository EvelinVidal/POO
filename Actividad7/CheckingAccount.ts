import { Account } from "./Account";
import { Person } from "./Person";

export class CheckingAccount extends Account {
  interest: number;
  customer:Person;
  constructor(accountNumber: number, customer: Person) {
    super(accountNumber, customer);
    this.interest = 1.5; //fixed interest
    this.customer = customer;
  }

  refreshBalance():void{
     this.balance *= this.interest;
  }
  getInterest(): number {
    return this.interest;
  }

  withdraw(withdrawAmount: number) {
    this.balance -= withdrawAmount;
  }
  toString(): string {
    return (
      "Customer: " +
      this.customer.getName() +
      " " +
      this.customer.getSurname() +
      "\n" +
      "Account number: " +
      this.getAccountNumber() + "\n"
    );
  }
}
