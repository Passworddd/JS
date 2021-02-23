// Escreva uma função que converta a data de entrada do usuário formatada como MM/DD/YYYY em um formato exigido por uma API (YYYYMMDD). O parâmetro "userDate" e o valor de retorno são strings.

// Por exemplo, ele deve converter a data de entrada do usuário "31/12/2014" em "20141231" adequada para a API.

// Modelo solicitado: 

function formatDate(userDate) {
    /*
        Basiscamente pego string retiro as barras e converto para um array cada
        campo ([dia, mês, ano]) atravez do split("/") sendo elemento 0 do array
        o dia, 1 sendo mês, 2 ano. Depois separo o primeiro elemento atraves do 
        slice(-1), slice(-1) pecorre o campo da direita pra esquerda armazenando
        o primeiro elemento e retirando os demais. Com o elemento armazenado concateno 
        ele com os demais elementos que foram gerados da seguinte forma:

        - Realizo a operação de retirada das barras "/" utilizando split e já converto para um array.

        - Com o arrray que sobra sera invertido a ordem com reverse.

        - Depois de revertido é selecionado todos elementos da lista menos o primeiro atravez de splice 
        
        
        - Depois de tratado inverto tudo novamente: 
        (se faz necessário inverte a ordem por conta que quero que no lugar do mês fique o dia --> YYYY/MM/D
    
    */
    return userDate.split("/").slice(-1).concat(userDate.split("/").reverse().splice(1).reverse()).join('')
}
  
  console.log(formatDate("12/31/2014"));

