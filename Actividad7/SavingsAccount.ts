import { Account } from "./Account";
import { Person } from "./Person";
export class SavingsAccount extends Account {
  protected interest: number;
  protected minimum: number;
  protected customer: Person;
  constructor(accountNumber: number, customer: Person) {
    super(accountNumber, customer);
    this.minimum = 100;
    this.interest = 0;
    this.customer = customer;
  }

  public withdraw(withdrawAmount: number) {
    console.log("Minimum balance: $" + this.minimum);
    console.log("Current balance: $" + this.balance);

    if (this.balance - withdrawAmount > this.minimum) {
      this.balance = this.balance - withdrawAmount;
      console.log("withdrawing: -$" + withdrawAmount);
      console.log("Total account balance: $" + this.balance);
    } else {
      console.log("the amount exceeds the minimum to operate");
    }
  }
  public setInterest(percentage: number) {
    // adjustable interest according to a number inserted by parameter.
    this.interest += percentage;
  }
  public refreshBalance(annualInterest: number): void {
    this.interest += annualInterest;
    console.log((this.balance += this.balance * this.interest)); // balance = 200
  }
  public getMinimum(): number {
    return this.minimum;
  }
  public toString(): string {
    return (
      "Customer: " +
      this.customer.getName() +
      " " +
      this.customer.getSurname() +
      "\n" +
      "Account number: " +
      this.getAccountNumber() +
      "\n"
    );
  }
}
