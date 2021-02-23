// Herança
// Camiseta, caneta, lapis

// Camiseta => Cor
// Caneta => Material
// Lapís => Material

// Quero que tenho aumento <=> desconto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
}
Camiseta.prototype = Object.create(Produto.prototype); // Seta os astributos prototype para dentro da string varia
Camiseta.prototype.constructor = Camiseta
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

camiseta.aumento(100)

console.log(camiseta)
console.log(Produto)