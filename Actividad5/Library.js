"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(name) {
        this.books = new Array; // Books is a new array 
        this.name = name;
    }
    Library.prototype.getQuantity = function () {
        return this.books.length;
    };
    Library.prototype.isEmpty = function () {
        if (this.books.length === 0)
            return true; // isEmpty === true when the array's length is 0.
        return false;
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.askTitle = function (title) {
        var available = false;
        for (var i = 0; i < this.getQuantity(); i++) {
            if (this.books[i].getTitle() == title) // using getTitle function, if the title given by parameter is the same as one of the array's Books
                available = true; // available turns out true
        }
        return available;
    };
    Library.prototype.toString = function () {
        var info = this.name + "\n"; // it shows first the name of the library.
        for (var i = 0; i < this.getQuantity(); i++) {
            info += this.books[i].toString() + '\n\n'; // adds all the info usign toString()
        }
        return info;
    };
    return Library;
}());
exports.Library = Library;
