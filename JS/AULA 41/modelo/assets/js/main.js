const monstrHora = () => { // Função so monstra a hora
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',
    {
        hour12:false
    })
}


const timer = setInterval(function(){ // Monstra a hora a cada 1000 ms = 1s
    console.log(monstrHora());
}, 1000);



setTimeout(function(){
    clearInterval(timer); // Usando essa função para parar executar durante o intervalo de execução da função
},5000);

