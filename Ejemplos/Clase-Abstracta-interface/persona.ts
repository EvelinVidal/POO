// cuando una clase usa una interfaz, esta obligada a usar todos los metodos que dice la interfaz.

// también se le pueden agregar metodos
import { InterfazPersona } from "./interfaz";
export class Persona implements InterfazPersona{ 
   protected nombre:string;
    protected apellido:string;
    constructor(paramNombre:string, paramApellido:string) {
    this.nombre=paramNombre;
this.apellido=paramApellido;
}
public setNombre(paramNombre: string): void {
     this.nombre=paramNombre;
}
public setApellido(paramApellido: string): void {
    this.apellido=paramApellido;
}
public getNombre(): string {
    return this.nombre;
}
public getApellido(): string {
    return this.apellido;
}
public getNombreCompleto():string{
    return this.nombre + this.apellido;
}
}