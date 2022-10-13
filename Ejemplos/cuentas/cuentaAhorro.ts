import { Cuenta } from "./cuenta";
import { Persona } from "./persona";

export class CuentaAhorro extends Cuenta{

    protected interes:number;
    protected saldoMinimo:number;
    
    constructor(paramCliente:Persona,paramCuenta:number){
        super(paramCliente,paramCuenta);
    }

    public setSaldoMinimo(paramSaldoMinimo:number){
        this.saldoMinimo=paramSaldoMinimo;
    }

    public getSaldoMinimo():number{
        return this.saldoMinimo;
    }

    public setInteres(paramInteres:number){
        this.interes=paramInteres;
    }

    public getInterest():number{
        return this.interes;
    }

    retirar(paramRetiro: number): void {
        let auxiliar = this.saldo - this.saldoMinimo;
        if(auxiliar > paramRetiro){
            this.saldo=this.saldo - paramRetiro;
            console.log("usted retiro" + paramRetiro);
        }else{
            console.log("saldo insuficiente");
        }
    }


    actualizarSaldo(): void {
        this.saldo = this.saldo * this.interes;
    }
    
}