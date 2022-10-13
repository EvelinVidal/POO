// todos los metodos de la interfaz son PUBLICOS. 

// se pueden poner atributos pero como siempre son PUBLICOS no corresponde. Se pierde el encapzulamiento.
export interface InterfazPersona { // la interfaz le dice a la clase que debe implementar estos metodos
    setNombre(paramNombre:string):void;
    setApellido(paramApellido:string):void; 
    getNombre():string;
    getApellido():string;
}
