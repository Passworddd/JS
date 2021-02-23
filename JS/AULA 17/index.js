function soma(x,y){
    return x+y;
}

console.log(soma(2,soma(2,soma(2,2))));

//-----------------Jeito moderno de declara função----------------------------
//  tipo_da_variável nome_da_variável = (parametro_da_função) => {
//  Corpo da função;
// };
//----------------------------------------------------------------------------

const raiz = (n) => {
    return (Math.sqrt(n))
};

console.log(raiz(9));

/**
 * ---------------Quando é simples------------------------
 * tipo_da_função nome_da_função = Parametro_da_função => Corpo_da_função_Simples_que_pode_ser_declarado_no_retorno;
 */

const raiz2 = n => n**(1/2)

console.log(raiz2(9))