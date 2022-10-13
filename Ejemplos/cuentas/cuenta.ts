import { Persona } from "./persona";

export abstract class Cuenta{
    protected nroCuenta:number;
    protected saldo:number;
    protected cliente:Persona;

    constructor(paramCliente:Persona,paramCuenta:number){
        this.saldo= 0;
        this.cliente=paramCliente;
        this.nroCuenta=paramCuenta;
    }
    public getNroCuenta():number{
        return this.nroCuenta;
    }
    public setNroCuenta(paramCuenta:number):void{
        this.nroCuenta=paramCuenta;
    }
    public getCliente():Persona{
        return this.cliente;
    }
    public setCliente(paramCliente:Persona):void{
        this.cliente=paramCliente;
    }
    public getSaldo():number{
        return this.saldo;
    }
    public setSaldo(paramSaldo:number){
        this.saldo=paramSaldo;
    }
    public ingresar(paramIngreso:number):void{
        console.log(paramIngreso);
        this.saldo = this.saldo + paramIngreso;
    }

    abstract retirar(paramRetiro:number):void;
    abstract actualizarSaldo():void;

}