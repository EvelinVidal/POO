import { Abuelo } from './abuelo';
import {InterfazPersona} from './interfazPersona'

export class Persona extends Abuelo implements InterfazPersona{
    protected nombre:string;
    protected apellido:string;
    protected DNI:number;

    constructor(paramNombre:string,paramApellido:string,paramDNI:number) {
        super();
        this.nombre=paramNombre;
        this.apellido=paramApellido;
        this.DNI=paramDNI;
    }
    public setNombre(paramNombre: string): void {
        this.nombre=paramNombre;
    }
    public setApellido(paramApellido: string): void {
        this.apellido=paramApellido;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getNombreCompleto():string{
        let aux:string = this.nombre + this.apellido;
        return aux;
    }
    public setDNI(paramDNI: number): void {
        this.DNI=paramDNI;
    }
    public getDNI(): number {
       return this.DNI;
    }

}
