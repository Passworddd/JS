/**
 * function soma () {
    let cont = 0;
    for(let argumento of arguments){
        cont += argumento;
    }
    console.log(cont);
}

soma(1,2,3,123,4);


 */
// --------------------- Forma anterior de passa um vetor como parametro de uma função---------
 function conta (operador,acumulador,numerador){
     for(let numero of numerador){
         if (operador === '+') acumulador += numero;
         if (operador === '*') acumulador *= numero;
         if (operador === '/') acumulador /= numero;
         if (operador === '-') acumulador -= numero;
     }
     console.log(`${acumulador} ANTIGO`);
 }
 
 conta('+',0,[20,30,40,50]) // Esse tipo de estrategia corre o risco de deixar algum numero de fora ou ser inviavel quando se tem n variaveis 
 
 //--------------------- Forma nova de passar um vetor como paramentro quando se quer limitar as primeiras casas para operaçãos especificas 
 function contar(operador,acumulador,...numerador){ // resto operation
     for(let numero of numerador){
         if (operador === '+') acumulador += numero;
         if (operador === '*') acumulador *= numero; 
         if (operador === '/') acumulador /= numero;
         if (operador === '-') acumulador -= numero;
     }
     return acumulador;
 }


 const obj = contar('*',1,20,30,40,50);

 console.log(`${obj} NOVO`);
 
 //------------------Passando um objeto como parametro da função

 function connta({nome,sobrenome}){
     console.log(nome,sobrenome);
 }
 connta({nome:'Natã',sobrenome:'Relva'}); // Acontece também uma desestruturação por atribuição
 