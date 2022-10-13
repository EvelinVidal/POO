"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SavingsAccount = void 0;
var Account_1 = require("./Account");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, customer) {
        var _this = _super.call(this, accountNumber, customer) || this;
        _this.minimum = 100;
        _this.interest = 0;
        _this.customer = customer;
        return _this;
    }
    SavingsAccount.prototype.withdraw = function (withdrawAmount) {
        console.log("Minimum balance: $" + this.minimum);
        console.log("Current balance: $" + this.balance);
        if (this.balance - withdrawAmount > this.minimum) {
            this.balance = this.balance - withdrawAmount;
            console.log("withdrawing: -$" + withdrawAmount);
            console.log("Total account balance: $" + this.balance);
        }
        else {
            console.log("the amount exceeds the minimum to operate");
        }
    };
    SavingsAccount.prototype.setInterest = function (percentage) {
        this.interest += percentage;
    };
    SavingsAccount.prototype.refreshBalance = function (annualInterest) {
        this.interest += annualInterest;
        console.log(this.balance += (this.balance * this.interest)); // balance = 200
    };
    SavingsAccount.prototype.getMinimum = function () {
        return this.minimum;
    };
    SavingsAccount.prototype.toString = function () {
        return ("Customer: " +
            this.customer.getName() +
            " " +
            this.customer.getSurname() +
            "\n" +
            "Account number: " +
            this.getAccountNumber() + "\n");
    };
    return SavingsAccount;
}(Account_1.Account));
exports.SavingsAccount = SavingsAccount;
