// IIFE -> Immediately invoked function expression
function qualquerCoisa(){
    console.log(11111111);
}
 qualquerCoisa();

 // Motivação-> Criar uma função sem precisar invocala, diminuindo os objetos no
 // escopo global.

/** 2º passo */(function (/** Inicialização */){/** Colocar escopo da função */})(/** Argumento */);
/** 3º passo */(function () {

    const nome = 'Natã'; // Escopo
    console.log(nome);

})() // Protege os objetos internos 