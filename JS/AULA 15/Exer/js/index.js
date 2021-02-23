const num = Number(prompt('Digite um número: '));


document.body.innerHTML = `<h1> Seu número é ${num} </h1> <br />`
document.body.innerHTML += `<p>A raiz quadrada é ${(Math.sqrt(num).toFixed(2))}</p><br/>`
document.body.innerHTML += `<p>${num} é inteiro: ${ Number.isInteger(num) }</p><br/>`
document.body.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p><br/>`
document.body.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p><br/>`
document.body.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p><br/>`
document.body.innerHTML += `<p>Com duas cadas decimais: ${num.toFixed(2)}</p>`