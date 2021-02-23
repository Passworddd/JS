/**    Função map --> Retorna um array do mesmo tamanho da original com os valore
alterados */

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// Dobre os números - Usando Map

const numDobrado = numeros.map(function(valor){
    return valor*2;
});

console.log(numDobrado);

/** A função anonima de filter sempre vai retorna true ou false, já map podemos
 * modificar os valores e retorna para outra variável os valos modificados 
 */

const pessoas = [
    { nome: 'Natã', idade: 25 },
    { nome: 'João', idade: 18 },
    { nome: 'Natanael', idade: 36 },
    { nome: 'Artur', idade: 24 },
    { nome: 'Rita', idade: 57 },
    { nome: 'Antonio', idade: 68 },
    { nome: 'Cicilia', idade: 0 },
]

const nomesPessoas = pessoas.map(function(obj){
    return obj.nome;
});

console.log(nomesPessoas)

const semNome = pessoas.map(function(obj){
    //delete obj.nome; ou
    return {idade: obj.idade};
});

let aletorio = (max, min) => Math.round(Math.random()*(max-min) + min)

const colocarID = pessoas.map(function(obj){
    // return {id: `${aletorio(100,0)}`, nome:obj.nome, idade: obj.idade} ou
    obj.id = aletorio(10000,999);
    return obj;
});

console.log(colocarID)

// Lembar que os objetos estão todos passado por referencia logo eles estão send
// alterados

const comID = pessoas.map(function(obj){
    let novoObj = {...obj};
    novoObj.id = aletorio(10000,1000);
    return novoObj;
});

console.log(comID)
