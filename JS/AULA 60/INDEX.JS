const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/**
 * -> Filtrar os elementos pares
 * -> Dobra os elementos
 * -> Somar todos
 */

 const eleProce = numeros.filter(valor => valor % 2 == 0).map(valor => valor*2).reduce((a,v)=> {a+=v; return a;});

 console.log(eleProce);