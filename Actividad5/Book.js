"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, publicationDate, pages, genre) {
        this.title = title;
        this.author = author;
        this.publicationDate = publicationDate;
        this.pages = pages;
        // optional parameter: 
        if (genre != undefined) {
            this.genre = genre;
        }
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getGenre = function () {
        if (this.genre != undefined) {
            return this.genre;
        }
        return "";
    };
    Book.prototype.getPublicationDate = function () {
        return this.publicationDate;
    };
    Book.prototype.getPages = function () {
        return this.pages;
    };
    Book.prototype.toString = function () {
        return "TITLE: " + this.getTitle() + '\n' + "GENRE: " + this.getGenre() + '\n' + "AUTHOR: " + this.getAuthor() + '\n' + "PUBLICATION DATE: " + this.getPublicationDate() + '\n' + "PAGES: " + this.getPages();
    };
    return Book;
}());
exports.Book = Book;
