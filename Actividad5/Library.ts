import { Book } from "./Book"

export class Library {
private books = new Array <Book>; // Books is a new array 
name:string; // name of the library's taken by parameter 
constructor(name:string){ 
this.name = name;
}
getQuantity():number{ // quantity shows how many books are in the array Books.
    return this.books.length
}
isEmpty():boolean{
    if (this.books.length ===0) 
    return true;   // isEmpty === true when the array's length is 0.
    return false;
}
addBook(book:Book){ // it adds a book to the Books array
this.books.push(book)
}
askTitle(title:string):boolean{ // it says (using true or false) if a title has been found in the array Books.
let available:boolean = false;
    for(let i:number = 0; i < this.getQuantity();i++){ 
        if (this.books[i].getTitle()==title) // using getTitle function, if the title given by parameter is the same as one of the array's Books
        available = true                    // available turns out true
}
return available;
}
toString():string{ // it shows every book of the library with their info (title, author, publication date, pages, genre)
    let info:string = this.name + "\n"; // it shows first the name of the library.
    for (let i:number = 0; i < this.getQuantity(); i++) {
      info += this.books[i].toString() + '\n\n'; // adds all the info usign toString() from Book (books's type is Book so it can use the function)
    }
    return info;
}
}