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
exports.CheckingAccount = void 0;
var Account_1 = require("./Account");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, customer) {
        var _this = _super.call(this, accountNumber, customer) || this;
        _this.interest = 1.5; //fixed interest
        _this.customer = customer;
        return _this;
    }
    CheckingAccount.prototype.refreshBalance = function () {
        this.balance *= this.interest;
    };
    CheckingAccount.prototype.getInterest = function () {
        return this.interest;
    };
    CheckingAccount.prototype.withdraw = function (withdrawAmount) {
        this.balance -= withdrawAmount;
    };
    CheckingAccount.prototype.toString = function () {
        return ("Customer: " +
            this.customer.getName() +
            " " +
            this.customer.getSurname() +
            "\n" +
            "Account number: " +
            this.getAccountNumber() + "\n");
    };
    return CheckingAccount;
}(Account_1.Account));
exports.CheckingAccount = CheckingAccount;
