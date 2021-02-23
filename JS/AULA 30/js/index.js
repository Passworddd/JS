// ATRIBUIÇÃO POR DESESTRUTURAÇÃO

//let a = 'A';
//let b = 'B';
//let c = 'C';

// 1º MODELO { [a,b,c] = [b,c,a] };

// 2º MODELO =>

//const letras = [b,c,a];

//[a,b,c] = letras;

//console.log(letras);

const numero = [1,2,3,4,5,6,7,8,9];

const [primeiroNumero, segundoNumero] = numero;

console.log(primeiroNumero);

// Resto -----------------------------------------------------------------

const numeros = [1000,2000,3000,4000,5000,6000];

const [nPrimeiro,nSegundo, ...resto] = numeros;

console.log(resto);

// Arrays detro de arrays ------------------------------------------------

const num = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(num[0][1]);

const [,[,,seis]] = num;

console.log(seis);

// Mais fácil ------------

const [lista1,lista2,lista3] = num // Pega as lista dentro da lista e adiciona normalmente a as váriaves 

console.log(lista1[1]) // Acessa o elemento da lista criada