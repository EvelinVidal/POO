"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountNumber, customer) {
        this.accountNumber = accountNumber;
        this.balance = 200;
        customer = customer;
    }
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.getCustomer = function () {
        return this.customer;
    };
    Account.prototype.setAccountNumber = function (newAccountNumber) {
        this.accountNumber = newAccountNumber;
    };
    Account.prototype.setBalance = function (newBalance) {
        this.balance = newBalance;
    };
    Account.prototype.setCustomer = function (newCustomer) {
        this.customer = newCustomer;
    };
    Account.prototype.fundTransfer = function (addAmount) {
        this.balance += addAmount;
    };
    return Account;
}());
exports.Account = Account;
