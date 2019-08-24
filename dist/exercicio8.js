"use strict";
exports.__esModule = true;
var Piscina = /** @class */ (function () {
    function Piscina(diametro, custoconstrucao) {
        this.diametro = diametro;
        this.custoconstrucao = custoconstrucao;
    }
    Piscina.prototype.raio = function () {
        return (this.diametro / 2);
    };
    Piscina.prototype.area = function () {
        return (3.14159 * this.raio() * this.raio());
    };
    Piscina.prototype.custoTotal = function () {
        return (this.area() * this.custoconstrucao);
    };
    return Piscina;
}());
exports.pis = Piscina;
