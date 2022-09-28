export class Telefono{
private estaPrendido:boolean;
private bateriaActual:number;
private enviar:boolean;
private llamar:boolean;
constructor(estaPrendido:boolean, bateriaActual:number){
     this.estaPrendido=estaPrendido;
     this.bateriaActual=bateriaActual;   
     this.enviar=false;
     this.llamar=false;
}
mandarMensaje():void{
if(this.estaPrendido===true && this.bateriaActual>=30){
this.enviar=true;
}
}
hacerLlamada():void{
    if(this.estaPrendido===true && this.bateriaActual>=30){
        this.llamar=true;
        }
}
prenderApagar(){
if(this.estaPrendido===true){
    this.estaPrendido=false;
}
else{
    this.estaPrendido=true;
}
}
}


