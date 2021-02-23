// Reduce - Reduzindo valores

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador,valor,indece,array){
    acumulador += valor;
    return acumulador;
},0 /** Opcional referente ao acumulador => pode ser qualquer coisa([],{},0) */);

console.log(total)

const iqualMap = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor*2);
    return acumulador;
},[] /** Opcional referente ao acumulador => pode ser qualquer coisa([],{},0) */);

console.log(iqualMap)

const igualFilter = numeros.reduce(function (acumulador, valor) {
    if(valor % 2 == 0) acumulador += valor;
    return acumulador;
}, [] /** Opcional referente ao acumulador => pode ser qualquer coisa([],{},0) */);

console.log(igualFilter)


// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Natã', idade: 25 },
    { nome: 'João', idade: 18 },
    { nome: 'Natanael', idade: 36 },
    { nome: 'Artur', idade: 24 },
    { nome: 'Rita', idade: 57 },
    { nome: 'Antonio', idade: 68 },
    { nome: 'Cicilia', idade: 0 },
]

const pessoVelha = pessoas.reduce(function(acumulador,valor){ // Acumulador vai ser o primeiro elemento e valor o segundo elemento
    if (acumulador.idade > valor.idade);return acumulador;
    return valor
});

console.log(pessoVelha)

