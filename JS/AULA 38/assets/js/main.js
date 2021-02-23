/**
 * 
 * try {
    console.log(naoExito);
} catch(err) {
    console.log('Não existo');
}

 */

 const soma = (x,y) => {
     if (
         typeof x !== 'number' ||
         typeof y !== 'number'
     ) {
         throw new Error('x e y precisam ser números') // new Erro apenas classifica que tipo de erro de erro 
     }
     return x + y
 }

try { // Capturar erro 
    console.log(soma('1', 2));
} catch(erro) { // Tratar o erro
    console.log('Alguma coisa mais amigavel para o usuário')
}