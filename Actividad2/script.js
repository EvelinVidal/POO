var Licuadora = /** @class */ (function () {
    function Licuadora(marca, modelo, potencia, capacidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.capacidad = capacidad;
    }
    Licuadora.prototype.mostrarMarca = function () {
        return this.marca;
    };
    Licuadora.prototype.mostrarModelo = function () {
        return this.modelo;
    };
    Licuadora.prototype.mostrarPotencia = function () {
        return this.potencia;
    };
    Licuadora.prototype.mostrarCapacidad = function () {
        return this.capacidad;
    };
    return Licuadora;
}());
var licuadora1 = new Licuadora("phillips", "HR2126/90", "500w", "1.5 litros");
licuadora1.mostrarCapacidad();
