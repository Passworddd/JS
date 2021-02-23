/**
 * fetch('pessoas.json') // Carrega o json
    .then(resposta => resposta.json()) // Convete a resposta para json
    .then(json => load(json));// Joga o valor em json para a função
 */

axios('pessoas.json') // Carrega o axios -> ele funciona similar ao fetch mas sem gerar novas promisses 
    .then(resposta => load(resposta.data));

function load(json){ // vai formata os dados
    const table = document.createElement('table') //Cria um elemento de tipo tabela
    for(let pessoas of json){ // Vai passar por todo o json
        const tr = document.createElement('tr'); // Cria um elemento do tipo linha
        
        
        let td1 = document.createElement('td'); // Cria um elemento do tipo coluna
        td1.innerHTML = pessoas.nome // insere no seu valor o nome da pessoa
        tr.appendChild(td1); // e passa ele como filho do elemento td1
    
        let td2 = document.createElement('td');
        td2.innerHTML = pessoas.idade
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoas.salario
        tr.appendChild(td3);

        table.appendChild(tr); // adiciona a linha a tabela
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table); // Adiciona a tabela como filho do resultado
}