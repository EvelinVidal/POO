
class Licuadora {    // nombre comienza con mayuscula 
    // primero atributos:
    marca: string;
    modelo: string;
    potencia: string;
    capacidad:string;
    estaPrendido:boolean
    constructor (marca: string, modelo:string, potencia:string, capacidad:string, estaPrendido:boolean){
    this.marca = marca;
    this.modelo = modelo;
    this.potencia = potencia;
    this.capacidad=capacidad;
    this.estaPrendido=estaPrendido;
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

     prenderApagar():void{
        if(this.estaPrendido===true){
            this.estaPrendido= false;
        }
else{
    this.estaPrendido=true;
}
    }
    }
    let licuadora1 = new Licuadora("phillips", "HR2126/90", "500w", "1.5 litros", false); 

