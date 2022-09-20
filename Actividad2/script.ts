
class Licuadora {    // nombre comienza con mayuscula 
    // primero atributos:
    marca: string;
    modelo: string;
    potencia: string;
    capacidad:string;
    
    constructor (marca: string, modelo:string, potencia:string, capacidad:string){
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.capacidad=capacidad;
    }
  
    mostrarMarca(){
        return this.marca;
    }
    
    mostrarModelo(){
        return this.modelo;
    }   
    mostrarPotencia():string{
        return this.potencia;
    }
    mostrarCapacidad():string{
        return this.capacidad
    }
    }
    let licuadora1 = new Licuadora("phillips", "HR2126/90", "500w", "1.5 litros"); 

licuadora1.mostrarCapacidad();