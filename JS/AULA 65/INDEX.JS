// 87. Métodos úteis para objetos

// Como copiar objetos para outro 

const produto = {nome: 'Carro', valor: 1.4};
const outroProduto = {...produto , material: 'Aço'};

outroProduto.nome = 'Bicicleta'
delete outroProduto.valor;

console.log(produto);
console.log(outroProduto);

// Outra maneira => 

const caneca = Object.assign({},produto,{material: 'porcelana'})
console.log(caneca)

// Já vimos

/**
 * Object.key => retorna as chaves
 * Object.freeze => congela o objeto
 * Object.defineProperties => define várias propriedades
 * Object.defineProperty => define uma propriedade
 */

// Object.getOwnPropertyDescriptor(produto, 'nome') => Descreve o que tem nas proedades do objeto produto e nome

console.log(Object.getOwnPropertyDescriptor(produto,'nome'));

// Para redefinir as propriedades Property do objeto

Object.defineProperty(produto,'nome',{
    value: 'moto',
    whitable: 'false',
    enumerable: true,
    configurable:false,
});

console.log(produto)
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
console.log(Object.entries(produto)) // Mostra os valores do property

const obj = Object.entries(produto);

obj.push('Outro valor')
console.log(obj)
console.log(Object.entries(produto))

for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor);
}