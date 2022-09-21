var Licuadora = /** @class */ (function () {
    function Licuadora(marcaInstancia, modeloInstancia, potenciaInstancia, capacidadInstancia, estaPrendido, cantidadInstancia, nroDeSerieInstancia) {
        this.marca = marcaInstancia;
        this.modelo = modeloInstancia;
        this.potencia = potenciaInstancia;
        this.capacidad = capacidadInstancia;
        this.estaPrendido = estaPrendido;
        this.cantidad = cantidadInstancia;
        this.nroDeSerie = nroDeSerieInstancia;
    }
    //getter
    Licuadora.prototype.mostrarMarca = function () {
        return this.marca;
    };
    //setter
    Licuadora.prototype.establecerCantidad = function (cantidadUsuario) {
        this.cantidad = cantidadUsuario;
    };
    // getter
    Licuadora.prototype.mostrarModelo = function () {
        return this.modelo;
    };
    //getter
    Licuadora.prototype.mostrarPotencia = function () {
        return this.potencia;
    };
    //setter
    Licuadora.prototype.establecerNroSerie = function (nroSerieUsuario) {
        this.nroDeSerie = nroSerieUsuario;
    };
    //getter
    Licuadora.prototype.mostrarNroSerie = function () {
        return this.nroDeSerie;
    };
    //getter
    Licuadora.prototype.mostrarCapacidad = function () {
        return this.capacidad;
    };
    //setter
    Licuadora.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Licuadora;
}());
var licuadora1 = new Licuadora("phillips", "HR2126/90", "500w", "1.5 litros", false, 5, "e90-00100hrt");
console.log(licuadora1.mostrarNroSerie());
// licuadora1.establecerNroSerie("a98-99900ilk");
// console.log(licuadora1.mostrarNroSerie());
