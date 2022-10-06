export class Libro{
    private titulo:string;
    private autor:string;
    private genero:string;

    constructor(titulo:string,autor:string,genero?:string){
        this.titulo = titulo;
        this.autor = autor;
        if(genero != undefined)
            this.genero = genero;
    }

    getTitulo():string{
        return this.titulo;
    }

    getAutor():string{
        return this.autor;
    }

    getGenero():string{
            return  this.genero;
    }

    toString():string{
        return 'Titulo: ' + this.titulo +' \n '+ 'Autor: '+this.autor +' \n '+ 'Genero: '+this.genero + '';
    }

    setTitulo(titulo:string){
        this.titulo = titulo;
    }

}
