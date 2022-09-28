import { Telefono } from "./telefono";
export class TelefonoConCamara extends Telefono{
	private capturar:boolean;
constructor(estaPrendido:boolean, bateriaActual:number){
	super(estaPrendido, bateriaActual);
this.capturar=false;
}
sacarFoto(){
if (this.capturar===false){
    this.capturar=true;
}
else{
    this.capturar=true;
}   
}
}
