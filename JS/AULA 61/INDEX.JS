// forEach -> Forma de inteirar apenas com array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

numeros.forEach((valor,indice,array)=>console.log(valor,indice));


// nome_array.forEach(função_anonima(valor,index,array){
//     fazer qualquer coisa ... (map, reduce, filter).  
// })