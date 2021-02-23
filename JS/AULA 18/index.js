 const pessoa00 = {
    nome: 'Natã',
    idade: 25,
    peso:68.00
};

console.log(pessoa00.nome);


function funcaoGeradora(nome,idade,peso){
    return{
        nome:nome,
        idade:idade,
        peso:peso,
    };
}

const pessoa = funcaoGeradora('Natã',10,38);
const pessoa1 = funcaoGeradora('Telma',10,42);

console.log(pessoa1.idade);


// Quando a função referencia o parametro recebendo o valor do atributo - Simples

const criadorDePessoas = (n,i,p) => {return {n,i,p}}; 

const pessoaSimples = criadorDePessoas('Natã',12,45);

// --------------------------------- Simplificado---------------------

console.log(pessoaSimples.n);

function CriarNome(n,i,p){
    return {n,i,p};
}

const pessoaMaisSimples = CriarNome('Natã',10,28);

console.log(pessoaMaisSimples.n);

const pessoa3 = {
    nome:'Natã',
    idade:10,
    sobrenome:'Relva',

    falar(){
        console.log(`${this.nome} é foda.`)
    },
    incrementa(){
        this.idade++;
    }
};

pessoa3.incrementa();