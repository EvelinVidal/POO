
class Licuadora {    
   private marca: string;
   private modelo: string;
   private potencia: string;
   private capacidad:string;
   private estaPrendido:boolean
   private cantidad:number;
   private nroDeSerie:string;
    constructor (marcaInstancia: string, modeloInstancia:string, potenciaInstancia:string, capacidadInstancia:string, estaPrendido:boolean, cantidadInstancia:number, nroDeSerieInstancia:string){
    this.marca = marcaInstancia;
    this.modelo = modeloInstancia;
    this.potencia = potenciaInstancia;
    this.capacidad=capacidadInstancia;
    this.estaPrendido=estaPrendido;
    this.cantidad=cantidadInstancia;
    this.nroDeSerie=nroDeSerieInstancia;
    }
//getter
      mostrarMarca():string{
        return this.marca;
    }
//setter
    establecerCantidad(cantidadUsuario:number):void{
        this.cantidad=cantidadUsuario;
    }
// getter
      mostrarModelo():string{
        return this.modelo;
    }   
//getter
    mostrarPotencia():string{
        return this.potencia;
    }
//setter
establecerNroSerie(nroSerieUsuario:string):void{
this.nroDeSerie=nroSerieUsuario;
}

//getter
mostrarNroSerie():string{
    return this.nroDeSerie;
}
//getter
    mostrarCapacidad():string{
        return this.capacidad
    }
//setter
     prenderApagar():void{
        if(this.estaPrendido===true){
            this.estaPrendido= false;
        }
else{
    this.estaPrendido=true;
}
    }
    }


    let licuadora1 = new Licuadora("phillips", "HR2126/90", "500w", "1.5 litros", false, 5, "e90-00100hrt"); 


console.log(licuadora1.mostrarNroSerie())
// licuadora1.establecerNroSerie("a98-99900ilk");
// console.log(licuadora1.mostrarNroSerie());
