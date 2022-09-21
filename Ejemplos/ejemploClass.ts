class Persona {    // nombre comienza con mayuscula 
    // primero atributos:
    nombre: string;
    apellido: string;
    dni: number;
    edad:number;
    vivo: boolean;
    
    constructor (nombre: string, apellido:string, dni:number, edad:number){
    this.nombre = nombre  // (this.nombre se refiere al nombre del objeto, mientras que nombre se refiere al parametro)
    this.apellido = apellido;
    this.dni = dni;
    this.edad = edad;
    this.vivo = true; // (no hace falta pasarlo por parametro porque ya que se la clase se inicia con vivo = true)
    }
    // segundo funcionalidades
    hablar (){
    console.log("hola")   
    }
    razonar(){
    let numero1:number = 5;
    let numero2:number=5
    console.log(numero1+numero2);
    }
    
    obtenerEdad(){
    console.log(this.edad);  // dentro de la clase esta bien usar this.edad, fuera de la clase es mala practica usar juan.edad.
    }
    }