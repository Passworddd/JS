/**
    Nata Relva tem 26 anos, pesa 64 kg 
    e tem 1.6 de altura e seu IMC É DE 25,992
 */

 const nomeCompleto = 'Nata Relva';
 let idade = 26;
 let peso = 64;
 const alturaEmMetros = 1.6;
 let imc; // Peso / (altura * altura)
 let anoNascimento = 1994;

imc = peso / (alturaEmMetros * alturaEmMetros);

console.log(`${nomeCompleto} tem ${idade} anos  pesa ${peso} e tem ${alturaEmMetros}  de altura e seu IMC é  ${imc}`);