const numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-Titulo');
const numeroTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero

numeroTexto.innerHTML = `Raiz quatrada: ${Math.sqrt(numero).toFixed(2)} <br />`;
numeroTexto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br />`;
numeroTexto.innerHTML += `${numero} É NaN: ${Number.isNaN(numero)} <br />/`;
numeroTexto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br />`;
numeroTexto.innerHTML += `Arredondado para cime: ${Math.ceil(numero)}<br />`;
numeroTexto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;