import { Account } from "./Account";
import { Person } from "./Person";

export class CheckingAccount extends Account {
  protected interest: number;
  protected customer: Person;
  constructor(accountNumber: number, customer: Person) {
    super(accountNumber, customer);
    this.interest = 1.5; //fixed interest
    this.customer = customer;
  }

  public refreshBalance(): void {
    this.balance *= this.interest;
  }
  public getInterest(): number {
    return this.interest;
  }

  public withdraw(withdrawAmount: number) {
    this.balance -= withdrawAmount;
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
