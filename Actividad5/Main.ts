import { Library } from "./Library";
import { Book } from "./Book";

let book_01:Book = new Book("Angels & Demons", "Dan Brown", "May 1, 2000", 624, "crime fiction" )
let book_02:Book = new Book("How to Win Friends and Influence People", "Dale Carnegie", "Agust 16, 2010", 304, "Personal development")
let book_03:Book = new Book("A clash of kings", "George R.R Martin", "March 24, 2014", 752, "Fantasy" )
let book_04:Book = new Book("The Da Vinci Code", "Dan Brown", "March 18, 2003", 464, "crime fiction" )

let bookDepository = new Library("Book Depository: ") // creating a new Library called Book Depository. 
bookDepository.addBook(book_01);
bookDepository.addBook(book_02);
bookDepository.addBook(book_03);
bookDepository.addBook(book_04);

console.log(bookDepository.toString());