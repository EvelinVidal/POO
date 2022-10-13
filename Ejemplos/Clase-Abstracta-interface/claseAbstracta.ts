export abstract class Robot{
protected marca: string;
protected voltaje:number;
constructor(paramMarca:string, paramVoltaje:number){
this.marca=this.marca;
this.voltaje=paramVoltaje;
}
abstract limpiar()
abstract cargar();
public saludar():void{
console.log("buenos dias");
}

}
// no se puede hacer una instancia de una clase abstracta. 
// no puedo hacer let robot:Robot = new Robot("soy", 65)
// para eso puedo crear herencias. 