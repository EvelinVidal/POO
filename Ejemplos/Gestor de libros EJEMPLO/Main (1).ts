import { Gestor } from "./Gestor";
import { Libro } from "./Libro";

let biblioteca = new Gestor("Biblioteca"); // biblioteca es una instancia del objeto gestor. 

//crea instancias del objeto Libro 
let libro_1 = new Libro("Harry Potter 1","J. K. Rowling","Fantasía");
let libro_2 = new Libro("Harry Potter 2","J. K. Rowling","Fantasía");
let libro_3 = new Libro("Harry Potter 3","J. K. Rowling","Fantasía");
let libro_4 = new Libro("Sherlock Holmes","Arthur Conan Doyle","Misterio");
let libro_5 = new Libro("El señor de los anillos","J. R. R. Tolkien","Fantasía");
let libro_6 = new Libro("Cien años de soledad","Gabriel García Márquez","Novela");

biblioteca.insertar(libro_1); // agrega una instancia al objeto biblioteca a través de su función insertar. 
biblioteca.insertar(libro_2);
biblioteca.insertar(libro_3);
biblioteca.insertar(libro_4);
biblioteca.insertar(libro_5);


let arreglo:Array<Libro> = biblioteca.getLibros();
arreglo.push(libro_6);

let biblioteca2 = new Gestor("Biblioteca 2 ",arreglo); // la biblioteca2 se inicializa con el array "arreglo". 

console.log(biblioteca.toString());
console.log(biblioteca2.toString());
