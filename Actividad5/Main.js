"use strict";
exports.__esModule = true;
var Library_1 = require("./Library");
var Book_1 = require("./Book");
var book_01 = new Book_1.Book("Angels & Demons", "Dan Brown", "May 1, 2000", 624, "crime fiction");
var book_02 = new Book_1.Book("How to Win Friends and Influence People", "Dale Carnegie", "Agust 16, 2010", 304, "Personal development");
var book_03 = new Book_1.Book("A clash of kings", "George R.R Martin", "March 24, 2014", 752, "Fantasy");
var book_04 = new Book_1.Book("The Da Vinci Code", "Dan Brown", "March 18, 2003", 464, "crime fiction");
var bookDepository = new Library_1.Library("Book Depository: "); // creating a new Library called Book Depository. 
bookDepository.addBook(book_01);
bookDepository.addBook(book_02);
bookDepository.addBook(book_03);
bookDepository.addBook(book_04);
console.log(bookDepository.toString());
