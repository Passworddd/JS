// Filter, map, recude

// Retorne os números maiores que 10;

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// ---> Maneira menos prática
const maior10 = (num) => { let acumula = []; for (let i of num) { if (i > 10) { acumula.push(i); } } return acumula; }
const maior = maior10(numeros); 
console.log(maior);

// ---> Maneira prática com filter

const callbackFilter = (valor,index,array ) => (valor > 10);
let numerosFiltrados = numeros.filter(/** FUNÇÃO DE CALLBACK ->*/ callbackFilter);

console.log(numerosFiltrados);

// ---> Ou Colocando uma função anonima

const numerosFiltrados0 = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados0);

// ---> Filtrar coisas de objeto

// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Natã', idade: 25 },
    { nome: 'João', idade: 18 },
    { nome: 'Natanael', idade: 36 },
    { nome: 'Artur', idade: 24 },
    { nome: 'Rita', idade: 57 },
    { nome: 'Antonio', idade: 68 },
    { nome: 'Cicilia', idade: 0 },
]

const pessoasA = pessoas.filter(function(valor){
    const final = valor.nome.length - 1
    return valor.nome[final] == 'a' || valor.nome[final] == 'A' || valor.nome[final] == 'ã' 
});
console.log(`PESSOAS QUE COMEÇA COM A: ${pessoasA}`)

const pessoaGrande = pessoas.filter(function(valor){
    const validador  = valor.nome.length - 1;
    return validador >= 5;
});

console.log(`PESSOAS COM MAIORES NOMES: ${pessoaGrande}`);

const pessoaMaior50 = pessoas.filter(function(valor){
    const validador = valor.idade;
    return validador > 50;
});

console.log(`PESSOAS MAIORES QUE 50: ${pessoaMaior50} `);

