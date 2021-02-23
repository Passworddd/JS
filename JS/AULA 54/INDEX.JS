const nomes = ['Eduardo', 'Natã' , 'Relva']

// Deletar dados de uma string sem alterar o index =>

delete nomes[0]; // Deleta Edutador
nomes[0] = 'Rafael'// Adiciona rafael

// Valor passado por referencia sempre estão diretamente ligado ao mesmo endereço de memoria

const nome1 = nomes; // Nome 1 recebe nomes(Rafel, Natã, Relva)
const nome2 = [...nome1];

// delete nome1[0]; // Quando deletado o nome 1 temos 
delete nome2[0];

console.log(nome1)
console.log(nome2)

nome1.pop(2);
const removidoPop = nome1.pop(1); // Pop retorna o elemento removido
console.log(nome1);
console.log(removidoPop)

nome1.unshift('Natanael');
nome1.push('Gael')
console.log(nome1)


