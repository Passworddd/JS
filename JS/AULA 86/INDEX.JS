const rand = (max,min) => Math.floor(Math.random()*(max-min)-min);

const pro = (msg,tempo) => new Promise ((resolva,rejeite)=> { 
    if(typeof msg !== 'string') rejeite(false)
    setTimeout(()=> resolva(msg),tempo);
});

pro('Conectando ao BD', rand(1,3))
    .then(r => {console.log(r); return pro('Conexão Realizada',rand(1,3))})
    .catch(e => console.log(`Erro: ${e}`));

    // Promise.all Promise.race Promise.resolve Promise.reject

    // Promise.all => Passamos um array com promeças e ele te entrega uma promeça só com os valores dentro do array
    // Promise.race => Faz o mesmo que a anterior mas retorna logo a primeira promeça a processada
    // Promise.resolve => Retona sempre um promeça ja resolvida ou rejeitada (não preisando fazer todo os aparatos do código)
const promises = [ // Resolver todas essas promeças e me trás os valores de volta
    //'primeiro valor',
    pro('Promise 1', 3000),
    pro('Promise 2', 500),
    pro('Promise 3', 1000),
    //pro(10, 1000),
    //'Outro valor',
];

Promise.race(promises)
    .then(valor => console.log(valor))
    .catch(erro => console.log(erro))

function baixarPagina(){
    const emCache = false;
    
    if(emCache){
        return Promise.resolve('Página em Cache')
    } else {
        return pro('Baixei a página',3000);
    }
}

baixarPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e))

