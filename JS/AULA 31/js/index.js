const pessoa = {
    nome: 'Nata',
    sobrenome: 'Relva',
    idade: '25',
    endereco: {
        rua: 'Francisco Dantas',
        numero: 431,
        dataNascimento: {
            dia: 30,
            mes:7,
            ano:1994
        }
    }
}

// Atribuição via desestruturção com objetos

const {nome,sobrenome, endereco:{rua,dataNascimento:{dia, mes: d = 1223, ...resto }}} = pessoa;

console.log(resto);