// 1º Faço o constrotur primario =>

function Produto(nome,valor) {
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.aumento = function(quantia) {this.valor += quantia};
Produto.prototype.desconto = function (quantia) { this.valor += quantia};

function Caneta(nome,valor,cor) {
    Produto.call(this,nome,valor);
    } // Já linkei a função caneta a produto

const caneta = new Caneta('Bic',1.80,'Azul');

console.log(caneta);