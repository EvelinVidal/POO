import { Cuenta } from "./cuenta";
import { Persona } from "./persona";

export class CuentaCorriente extends Cuenta{

    constructor(paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);
      
    }

    retirar(paramRetiro: number): void {
        if(this.saldo > paramRetiro){
            this.saldo=this.saldo - paramRetiro;
            console.log("usted retiro" + paramRetiro);
        }else{
            console.log("saldo insuficiente");
        }
    }
    actualizarSaldo(): void {
        this.saldo = this.saldo * 1.5;
    }
    
}
