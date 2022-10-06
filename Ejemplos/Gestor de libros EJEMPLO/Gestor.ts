import { Libro } from "./Libro";

export class Gestor{
    private libros = new Array<Libro>;
    private nombre:string; // nombre de la biblioteca

    constructor(nombre:string,libros?:Array<Libro>){
        this.nombre = nombre;
        if(libros != undefined)
            this.libros = libros;
    }
    esVacio():boolean{
        if(this.libros.length == 0)
            return true;
        return false;}
    cantidadLibros():number{
        return this.libros.length
    }
    insertar(libro:Libro){
        this.libros.push(libro);
    }


// getTitulo():string{
// return this.titulo; // muestra la lista de libros creada (al principio del código)
// }
    // si yo uso directamente el array Libro para mostrar en getLibros, no estoy copiando los elementos en otra lista
// solo le paso la ubicacion, cualquier cambio a 

// crea un array que copia los libros del array Libro. 
    getLibros():Array<Libro>{
        let nuevoArreglo = new Array<Libro>;
        for (let i:number = 0; i < this.cantidadLibros(); i++) {
            let titulo = this.libros[i].getTitulo(); // copia el titulo del libro en la posicion [i]
            let autor = this.libros[i].getAutor(); // copia el autor del libro en la posicion [i]
            let genero = this.libros[i].getGenero(); // copia el genero del libro en la posicion [i]
            let nuevoLibro = new Libro(titulo,autor,genero); // creo un objeto-instancia con los valores de titulo autor y genero
            nuevoArreglo.push(nuevoLibro);   //al arreglo nuevo se le van agregando cada libro con su info.     
          }
        
        return nuevoArreglo;
    }
// despues en Main se crea una copia asi: 

// let arreglo:Array<Libro> = biblioteca.getLibros();  como getLibros genera una copia, esa copia es asignada a arreglo
// arreglo.push(libro_6);

    toString():string{ // muestra todos los libros de la biblioteca con su titulo, autor, genero.
        let resultado:string = this.nombre + "\n"; // nombre de la biblioteca, salto de linea
        for (let i:number = 0; i < this.cantidadLibros(); i++) {
          resultado += this.libros[i].toString() + '\n\n'; // A resultado se le agrega toda la informacion del libro con el toString()
        }
        return resultado;
    }
 // funcion consultar.
 //          Manera 1:
//  consultar(titulo:string):boolean{
//     for (let i:number=0;i<this.cantidadLibros();i++){
//         respuesta=true;
//     }
//     return respuesta;
//  }   
// el problema de esa manera es que si el libro es encontrado en las primeras posiciones, el bucle sigue analizando 
// todo el listado de libros, por eso:
//              manera 2:   (más eficiente que el anterior)
// consultar(titulo:string):boolean{
//    for(let i:number=0;i<this.cantidadLibros();i++){ 
//     if(this.libros[i].getTitulo()==titulo)
//         return true;
//   }
//   return false; }
// }


// getIndex obtiene el indice del titulo del libro recibido por parámetro
    getIndex(titulo:string):number{ // getIndex recibe el parámetro TITULO para saber la posicion en el indice.
        let pos:number = -1; // se declara y define pos; pone -1 para usar la variable en otra funcion(consultad, modificar, eliminar). Es indicador de algo
        for (let i:number = 0; i < this.cantidadLibros(); i++) { // bucle for recorre los titulos del array libros
            if(this.libros[i].getTitulo() == titulo) // si el titulo es igual al titulo del libro en la posicion i 
                pos = i; // pos cambia su valor al valor de i
        }
        return pos; // devuelve pos con el valor de i (la posicion del libro en el indice)
    }
    
    consultar(titulo:string):boolean{
        if(this.getIndex(titulo) == -1) // si el indice es -1 significa que el libro no existe en el array. 
            return false; // consulta es false cuando no existe el libro
        return true // cuando pasa lo contrario es true. 
    }

    modificarGestor(nombre:string){
        this.nombre = nombre;
    }
    modificarLibro(titulo:string){
        if(this.getIndex(titulo) == -1) // si el indice del libro es -1 significa que el libro no existe en el array libros. 
            this.libros[this.getIndex(titulo)].setTitulo(titulo) 
    }
    eliminar(titulo:string){
        if(this.getIndex(titulo) == -1)
            this.libros.splice(this.getIndex(titulo),1);
    }
}