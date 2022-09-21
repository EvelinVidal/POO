var Rectangulo = /** @class */ (function () {
    function Rectangulo(baseUsuario, alturaUsuario) {
        this.base = baseUsuario;
        this.altura = alturaUsuario;
        this.cuadrado = false;
        this.rectanguloVertical = false;
    }
    Rectangulo.prototype.calcularArea = function () {
        this.base * this.altura;
    };
    Rectangulo.prototype.compararOtroRectangulo = function (baseOtro, alturaOtro) {
        if (baseOtro === this.base && alturaOtro === this.altura) {
            return 0;
        }
        if (baseOtro > this.base && alturaOtro > this.altura) {
            return 1;
        }
        else {
            return -1;
        }
    };
    Rectangulo.prototype.esCuadrado = function () {
        if (this.base === this.altura) {
            this.cuadrado = true;
        }
        return this.cuadrado;
    };
    Rectangulo.prototype.posicionVertical = function () {
        if (this.altura > this.base) {
            this.rectanguloVertical = true;
        }
        return this.rectanguloVertical;
    };
    return Rectangulo;
}());
var pepito = new Rectangulo(5, 100);
//  console.log(pepito.compararOtroRectangulo(10,10));  FUNCIONA
//  console.log(pepito.esCuadrado());       FUNCIONA
console.log(pepito.posicionVertical());
