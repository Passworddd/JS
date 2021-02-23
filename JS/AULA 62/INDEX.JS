// REVISÃO OBJETO

// Objeto literal => 
// 1º Metodo para declarar
const pessoa = {
    // Chave de um objeto
    nome: 'Natã', // Chave com o valor de Natã
    sobrenome: 'Relva' // Outra chave com valor de  Relva
};

// Duas Maneiras de acessar os valor das chaves
const chave = 'nome';

console.log(pessoa.nome) // 1º Maneira
console.log(pessoa[chave]) // 2º Maneira => Notação de couchetes, assim podendo colocar um valor dinâmico

// 2º Metodo para declarar

const pessoa1 = new Object(); // Uma constante vai receber um moude de um objeto.

// Maneira de criar chaves dentro do objeto

pessoa1.nome = 'Natanael'; // Chaves declarada dentro do escopo do objeto pessoa1 já com os valores.
pessoa1.sobrenome = 'Brito';
pessoa1.idade = 26;

// Maneiras de apagar chaves dentro do objeto

delete pessoa1.nome;

console.log(pessoa1);

// Funções dentros do objeto =>

pessoa1.falarNome = function() { // Criando de fora do objeto um metodo para ele.
    return `${this.nome} está falando seu nome.`
}
pessoa1.getDataNascimento = function () { // Maniputando uma chave dentro de um metodo
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome(); // Anotação via couchetes aparentimente não funcionar com metodos

pessoa1.getDataNascimento();

console.log(pessoa1.getDataNascimento()) // getDataNascimento agora só retorna uma valor

// Utilizando for para pecorre os valos dos objetos.

for(let chave in pessoa1){ // Pecorre as chaves
    console.log(chave)
}

for(let valor in pessoa1){ // Pecorre os valores das chaves: FOR IN + ANOTAÇÃO DE COUCHETES !!!
    console.log(pessoa1[valor]);
}

// Funções para criar moudes de objetos =>

// 1º Factory function || 2º Constructor function || 3º Classes

// 1º =>

function criaPessoa(nome,sobrenome){ // Uma função qualquer 
    return { // Retorna um objeto
        //Corpo do objeto
        nome,
        sobrenome,
        get nomeCompleto(){ // Seta os valos do objeto, assim protegendo 
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Natã','Relva');

console.log(p1.nomeCompleto);

// 2º => 

function Pessoa(nome,sobrenome){ 
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('João', 'Messias'); 

/**
 *  p2 vai ser modelado por new se tornando um objeto.
 *  new por sua vez usa o modelo que a função Pessoa cria dentro do seu escopo
 *  por isso Pessoa é o construtor desse objeto
 */

console.log(p2);

// 3º => Ainda vai ser explicado...

// Quando quero o objeto não seja alterado

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this) // Agora não da para alterar nada das chaves
}

const p3 = new Pessoa('João', 'Messias'); 



