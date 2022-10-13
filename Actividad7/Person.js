"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, idNumber) {
        this.name = firstName;
        this.surname = lastName;
        this.id = idNumber;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getSurname = function () {
        return this.surname;
    };
    Person.prototype.getID = function () {
        return this.id;
    };
    return Person;
}());
exports.Person = Person;
