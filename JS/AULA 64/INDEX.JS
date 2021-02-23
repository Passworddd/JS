
function Produto(nome, preco, estoque) { // Se queremos que estoque fique travada(Não pode mudar) 
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', { // Define da chave do objeto estoque como
        enumerable: true, // Por ser mostrado no console.log
        configurable: true, // Pode apagar ou reconfigurar a chave
        get: function() {
            return estoquePrivado;
        },
        set: function(valor){ // Set faz a propridade estoque receber um valor que pode ser manipulado por uma função interna.
            if(typeof(valor) != 'number'){
                throw new TypeError('Mensagem')
            } 
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);

// Get obtem valores -- O set é para configurar o valor

// Get => Pega o valor e te mostra

//console.log(p1.estoque);

// Set => Vai validar o valor / Configurando

p1.estoque = 500

console.log(p1['estoque']);

// Set e Get para função fabrica

function p3(nome){
    return {
      get nome() {
          return nome;
      },
      set nome(valor){
        nome = valor.replace('coisa',''); // replace procura uma string e substitui por algo => No caso substituimos coisa por nada
      }
    };
}

const p4 = p3('Camiseta');

p4.nome = 'qualquer coisa';


console.log(p4.nome)