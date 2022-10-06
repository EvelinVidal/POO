
export class Book {
private title:string;
private author:string;
private genre:string;
private publicationDate:string;
private pages:number;
constructor(title:string, author:string, publicationDate:string, pages:number, genre?:string){
this.title = title;
this.author = author;

this.publicationDate=publicationDate;
this.pages=pages;
// optional parameter: 
if (genre != undefined){
this.genre = genre;
}
}

getTitle():string{
    return this.title;
}
getAuthor():string{
return this.author;
}
getGenre():string{
    if (this.genre !=undefined){ 
    return this.genre;
}
    return "";
}
getPublicationDate():string{
return this.publicationDate;
}
getPages():number{
    return this.pages;
}
toString():string{
    return "TITLE: " + this.getTitle()  +'\n'+ "GENRE: " + this.getGenre()  +'\n'+ "AUTHOR: "+ this.getAuthor() +'\n'+ "PUBLICATION DATE: "+this.getPublicationDate()  +'\n'+ "PAGES: "+ this.getPages();
}
}