class Auto{
    private marca:string;
    private modelo:string;
    private patente:string;

    constructor(marcaParam:string,modeloParam:string,patenteParam:string) {
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.patente = patenteParam;
    }

    public getMarca():string{
        return this.marca;
    }
    public setMarca(pMarca:string):void{
        this.marca = pMarca;
    }
    public getModelo():string{
        return this.modelo;
    }
    public setModelo(pModelo:string):void{
        this.modelo = pModelo;
    }
    public getPatente():string{
        return this.patente;
    }
    public setPatente(pPatente:string):void{
        this.patente = pPatente;
    }
}

class RegistroAutomor{

    private listadoDeAutos: Auto[];

    constructor(parametroArregloDeAutos:Auto[]){
        this.listadoDeAutos = parametroArregloDeAutos;
    }

    public buscarAuto(autoParam:Auto):void{
        let patenteABuscar = autoParam.getPatente();
        
        let posicion:number = -1;
        
        for(let i:number = 0; i<this.listadoDeAutos.length;i++){
            if(patenteABuscar === this.listadoDeAutos[i].getPatente()){
                posicion = i;
            }
        }
        if(posicion === -1){
            console.log("no esta registrado");
        }else{
            console.log("el auto esta registrado en la posicion "+ posicion);
        }

    }

}

let autoDeMarcos = new Auto("ford","fiesta","AAA111");
let autoDeMelina = new Auto("vw","gol","bbb111");
let autoDeJose = new Auto("chevrolet","astra","CCC111");

let autoABuscar = new Auto("BMW","X8","AAA111");

let arregloDeAutosParaRegistrarEnTDF:Auto[] = [autoDeJose,autoDeMarcos,autoDeMelina];

let registroAutomotorDeTierraDelFuego = new RegistroAutomor(arregloDeAutosParaRegistrarEnTDF);

let registrado = registroAutomotorDeTierraDelFuego.buscarAuto(autoABuscar); 