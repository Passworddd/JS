function Produto(nome,preco) { // Função contrutora
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.ValorComDesconto = function(valor) {
    return this.preco * (1 - (valor / 100));
}
Produto.prototype.ValorComAlmento = function(valor){
    return this.preco * (1 + (valor / 100));
}

const produto1 = new Produto('Abaju',100);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2.ValorComAlmento(30))
console.log(produto1.ValorComDesconto(30))

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        value: 113,
        enumerable: true,
    },
    nome: {
        value: 'Abajur'
    }
}); // Cria o objeto e set o prototype


console.log(p3.ValorComAlmento(30))
console.log(p3)


















/**
 * const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
}
const objC = {
    chaveC: 'C'
}

Object.setPrototypeOf(objB,objA);
Object.setPrototypeOf(objC,objB)

console.log(objB.chaveA)
 */