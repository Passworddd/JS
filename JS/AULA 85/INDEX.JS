/**
 *  
 *  Promises veio com uma opção de resolver o famoso inferno do call-back: 
 *  Função de call-back são responsaveis por desviar um fluxo de uma operação ao
 *  decorre de uma função, assim podemos execurtar de forma sincrona uma instrução
 *  asincrona.
 * 
 */

 // Maneira antiga ->

 // Função executada Asincronamente
function rand(max,min){ // Gera tempo entre max e mim aleatóriamente.
    return Math.floor(Math.random()*(max-min)+min)*1000; // Número Aletório Formado
}

function respodeAi(msg,tempo){ // Uma função qualquer, simulando uma operação linear
    setTimeout(()=> // Depois que função e chamada, sera executado uma operação depois de um certo tempo 
    {
        console.log(msg)// Operação realizada apenas mostrando a menssagem que foi dada como parametro
    },tempo);// fechamento da função como também o repasse do tempo que o setTimeout vai ficar sem executador o console.log(msg);
}




// Com função call-back

function callBack(msg, tempo,cb) { // Função vai chamar seus parametros
    setTimeout(() => // Vai executar depois de tempo o comando conole.log
    {
      console.log(msg) 
      if(cb) cb(); // se cb for verdadeiro então ele vai executar a função passada para ele
    }, tempo);
}

console.log('--------------------------------------')




// Com Promises ->

function pro(msg, tempo) { 
    return new Promise((resolve, reject) => { // Chamando o construtor da promise
        setTimeout(() => { // Simulação de uma função executando
            if(typeof msg != 'string') reject('BAD VALUE')
            resolve(msg) // Promise relaciona o valor do seu prototype a uma função
        }, tempo);
    }); 
}

pro('Conexão com o BD',rand(1,3)) // A função executa normalmente
    .then(resposta=> { // Then relaciona o valor prototype da respota a ao que retornou da promisse
        console.log(resposta);
        return pro('Buscando dados da BASE', rand(1,3));
    })
    .then(resposta=> {
        console.log(resposta)
        return pro(22,rand(1,3));
    })
    .then(resposta=>{
        console.log(resposta)
    })
    .catch(e=>{
        console.log('ERRO:', e);
    });



