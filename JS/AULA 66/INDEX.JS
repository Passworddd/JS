// Construtor => moude

function Pessoa(nome,sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    
    //this.nomeCompleto = () => this.nome + ' Antigo ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
  return this.nome + ' ' + this.sobrenome;  
};

const pessoa1 = new Pessoa('Natã', 'Relva', 26);
const pessoa2 = new Pessoa('Rita', 'Lima', 26);
const data = new Date();


console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)






















/**
 * function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;


    Object.defineProperty(this,'nomeCompleto',{
        get: function () { return (`${this.nome} ${this.sobrenome}`) },
        set: function(valor) {
            this.nome = valor
        }
    });
}

const pessoa1 = new Pessoa('Natã','Relva',26)

console.log(pessoa1.nomeCompleto)

pessoa1.nomeCompleto = 'Lima';

console.log(pessoa1.nomeCompleto)
 */