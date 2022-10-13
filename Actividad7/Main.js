"use strict";
exports.__esModule = true;
var CheckingAccount_1 = require("./CheckingAccount");
var Person_1 = require("./Person");
var SavingsAccount_1 = require("./SavingsAccount");
// customers
var customer01 = new Person_1.Person("Jason", "Knight", "39405961");
var customer02 = new Person_1.Person("Meredith", "Dempsey", "40345678");
var customer03 = new Person_1.Person("Isaiah", "Washington", "44592033");
// accounts
var expenses = new CheckingAccount_1.CheckingAccount(112334430001, customer01);
var savings = new SavingsAccount_1.SavingsAccount(123080430002, customer01);
var incomes = new CheckingAccount_1.CheckingAccount(112003980005, customer02);
var education = new SavingsAccount_1.SavingsAccount(131989010009, customer03);
// console.log (expenses.getInterest());
// savings.withdraw(50);
//education.withdraw(1000);
//console.log(expenses.refreshBalance());
// education.refreshBalance(0.10);
console.log(savings.toString());
console.log(incomes.toString());
console.log(education.toString());
