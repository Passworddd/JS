/**
  document.body.innerHTML += `Seu nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ______ letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ______<br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ______<br />`;
  document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ______<br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ______<br />`;
  document.body.innerHTML += `As palavras do seu nome são: ______<br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ______<br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: ______<br />`;
  Nata Johnatan Danilo Relva Brito
 */

const nome = prompt('Digite o seu nome completo');
let soLetra = nome.toLowerCase();
 soLetra = nome.match(/[a-z]/g);
document.body.innerHTML += `Seu nome tem ${soLetra.length} letras <br />`;
document.body.innerHTML = `${document.body.innerHTML} Seu nome completo é ${nome} <br />`;
document.body.innerHTML = `${document.body.innerHTML} A segunda letra do seu nome é ${nome[1]} <br/>`;
document.body.innerHTML = `${document.body.innerHTML} Qual o primeiro indice da letra a no seu nome: ${nome.indexOf('a')}<br />`;
document.body.innerHTML = `${document.body.innerHTML} Qual o último índice da letra a no seu nome ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são ${nome.slice(-3)} <br/>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras mainúsculo: ${nome.toLowerCase()}<br />`;

console.log(nome.toUpperCase())
