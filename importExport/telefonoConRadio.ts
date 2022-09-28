import { Telefono } from "./telefono";
export class TelefonoConRadio extends Telefono{
private frecuenciaActual:number;

constructor(estaPrendido:boolean, bateriaActual:number, frecuenciaActual:number){
	super(estaPrendido, bateriaActual);
this.frecuenciaActual = frecuenciaActual;
}
verFrecuenciaActual():number{
return this.frecuenciaActual;
}
}