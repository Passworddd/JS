// defineProperty - defineProperties
// defineProperty =>

function Produto(nome,preco,estoque){ // Se queremos que estoque fique travada(Não pode mudar) 
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',{ // Define da chave do objeto estoque como
        enumerable: true, // Por ser mostrado no console.log
        value: estoque, // Valor => Pode ser qualquer coisa até uma função
        writable: false, // Se ele pode ser modificado ou Não 
        configurable: false, // Pode apagar ou reconfigurar a chave
    });
}

const p1 = new Produto('Camiseta',20,3);
console.log(p1);
p1.estoque = 100234;
console.log(p1);
delete p1.estoque
console.log(p1);
console.log(Object.keys(p1))

//defineProperties =>
function Produtos(nome, preco, estoque) { // Se queremos que estoque fique travada(Não pode mudar) 
    this.nome = nome;
    this.preco = preco;
    Object.defineProperties(this,{ // Define varias propriedadas em massa
        nome:{
            enumerable: false,
            value: function() {return `Deu bom`;},
            writable: false,
            consfigurable: false,
        },
        preco:{},
        estoque: {},
    })
}

const p2 = new Produtos('Natã',10000000000,3);

console.log(p2.nome())