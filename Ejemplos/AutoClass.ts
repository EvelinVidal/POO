// EJERCICIO 1: usando la clase Auto: implementar la clase RegistroAutomotor 
//con métodos para consultar por un auto en un listado, borrar, 
// actualizar y dar de alta

// Clase Auto:
class Auto {
	private marca:string;
	private modelo:string;
	private patente:string;

constructor(marcaParam:string, modeloParam:string, patenteParam:string;){
this.marca = marcaParam;
this.patente = patenteParam;
this.modelo = modeloParam;
}
//getters y setters:

public getMarca():string{
return this.marca;
}
public setMarca (pMarca:string):void
}
public getModelo():string{
return this.modelo
}
public serModelo(pModelo:string):void{
this.modelo=pModelo;
}
public getPatente():string{
return this.patente;
}
public setPatente(pPatente:string):void{
this.patente = pPatente;
	}


// clase RegistroAutomotor

class RegistroAutomotor{
	private listadoDeAutos: Auto[  ]; // (es un array que contiene objetos del tipo Auto(clas Auto), las instancias creadas las podemos meter en un arreglo. 

constructor (parametroArregloDeAutos:Auto[]){	// recibe el arreglo de autos por parametro
this.listadoDeAutos = parametroArregloDeAutos;
}
public buscarAuto(autoParam:Auto):void{
let posicion:number = -1;
 for (let i:number = 0; i<this.listadoDeAutos.length;i++){
if (autoParam.getPatente ===this.listadoDeAutos[i].getPatente()){
posicion =i;	
		}
	}
if (posicion === -1){
	console.log("no esta registrado")
}
else { console.log("esta registrado en la posicion " + posicion);
}
}
}
// usar metodo buscar: 
let autoBuscar = new Auto("bmw", "x8", "AAA111");
let registrado = registroAutomotorDeTierraDelFuego.buscarAuto(autoBuscar);
//  DEFINO INSTANCIAS
let autoDeMarcos = new Auto("ford","fiesta","AAA111");
let autoDeMelina = new Auto("vw","gol","bbb111");
let autoDeJose = new Auto("chevrolet","astra","CCC111");

// LAS GUARDO EN UN ARRAY
let arregloDeAutosParaRegistrarEnTDF:Auto[] = [autoDeJose,autoDeMarcos,autoDeMelina]; // (asi creo y defino el array)

// ASIGNO INSTANCIA PARA LA CLASE:
let registroAutomotorDeTierraDelFuego = new RegistroAutomor(arregloDeAutosParaRegistrarEnTDF); //(asigno una instancia para RegistroAutomotor)
