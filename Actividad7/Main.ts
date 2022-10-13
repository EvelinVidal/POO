import { CheckingAccount } from "./CheckingAccount"
import {Person} from "./Person"
import {SavingsAccount} from "./SavingsAccount"

// customers
let customer01:Person = new Person("Jason", "Knight", "39405961");
let customer02:Person = new Person ("Meredith", "Dempsey", "40345678");
let customer03:Person = new Person ("Isaiah", "Washington", "44592033");
// accounts
let expenses:CheckingAccount = new CheckingAccount (112334430001, customer01);
let savings:SavingsAccount = new SavingsAccount(123080430002, customer01);
let incomes:CheckingAccount = new CheckingAccount(112003980005, customer02);
let education:SavingsAccount = new SavingsAccount (131989010009, customer03);



// console.log (expenses.getInterest());
// savings.withdraw(50);
//education.withdraw(1000);
 
//console.log(expenses.refreshBalance());
// education.refreshBalance(0.10);
console.log(savings.toString());
console.log(incomes.toString());
console.log(education.toString());
