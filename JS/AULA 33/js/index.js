// For in
// Primeiramente com array como objeto automaticamente indexados

// Pega de forma dinamica
//const chave = 'nome'; // cr
//console.log(pessoa[chave]); // Muito utio quando não se sabe qual propriedade vau pegar
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 26
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]) 
}

//console.log(pessoa.nome);








/**
 * const frutas = ['Pera','Maçã','Uva'];
 * 
 *  
 * for (let i = 0; i< frutas.length; i++) {
    console.log(frutas[i]);}
---------------------------------------------
    Pecorre Objeto Vetor array

    for (let indice in frutas){
    console.log(frutas[indice]);
---------------------------------------
    Pecorre Objeto
}


 */