class Rectangulo {
base:number;
altura:number;
cuadrado:boolean;
rectanguloVertical:boolean;
constructor(baseUsuario:number, alturaUsuario:number){
this.base = baseUsuario
this.altura = alturaUsuario;
this.cuadrado = false;
this.rectanguloVertical = false;
 }
calcularArea(){

    this.base * this.altura
}
 compararOtroRectangulo(baseOtro:number, alturaOtro:number):number{
if(baseOtro === this.base && alturaOtro ===this.altura){
    return 0
}
if (baseOtro > this.base && alturaOtro > this.altura){
return 1
}
else{
    return -1
}
 }
 esCuadrado():boolean { 
if (this.base === this.altura){
     this.cuadrado = true
}
return this.cuadrado
 }
posicionVertical():boolean{
    if ( this.altura>this.base){
       this.rectanguloVertical = true
        
   }
return this.rectanguloVertical;
}

}

let pepito = new Rectangulo (5, 10);
//  console.log(pepito.compararOtroRectangulo(10,10));  
//  console.log(pepito.esCuadrado());      
//  console.log(pepito.posicionVertical()); 