// Capturar evento de submit do formulário
const form = document.querySelector('#form');
// Utilizamos um evento para parar um evento => no caso o envio do formulário

form.addEventListener('submit', function(evento){ 
    evento.preventDefault();

    const inputPeso = evento.target.querySelector('#peso'); // Target diz exatamente qual elemento foi realizado o evento.
    const inputAltura = evento.target.querySelector('#altura')

    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso Invalido', false);
        return;
    }
    if (!altura){
        setResultado('Altura Invalido', false);
        return;
    }

    const imc = (a, p) => p / (a**2);

    const resulImc = imc(altura,peso);

    if (resulImc < 18.5) {
        setResultado(`Abaixo do peso`,true);
                return;
        } else if (resulImc >= 18.5 && resulImc <= 24.9){
         setResultado('Peso Normal',true);
                return;
        } else if (resulImc >= 25 && resulImc <= 29.9){
         setResultado('Sobrepeso',true);
                return;
        } else if (resulImc >= 30 && resulImc <= 34.9){
         setResultado('Obesidade Grau 1',true);
                return;
        } else if (resulImc >= 35 && resulImc <= 39.9){
         setResultado('Obsidade Grau 2',true);
                return;
        } else if (resulImc > 40) {
         setResultado('Obsidade Grau 3',true);
                return;
        }

    //setResultado(`IMC: ${imc(altura,peso)}`, true);

});

function criaP() {
    const p = document.createElement('p'); // Criando um elemento HTML => No caso um pragrafo
    return p;
}



function setResultado(msg, isValid) { // Quando se passa algum texto para essa função ela grava o resultado dentro da div resultado no HTML
    const resul = document.querySelector('#resultado'); // resul é uma variavel criada para relacionar os dados contido dentro da dive identificada pelo id resultado    --- //resul.innerHTML = `<p>${msg}</p>`; // A propriedade innerHTML de resul está recebendo a menssagem msg
    resul.innerHTML = '' // Primeiramente ele zera o campo

    p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo_resultado');
        p.innerHTML = `${msg}`
        resul.appendChild(p);
    } else {
        p.classList.add('paragrafo_resultado_n');
        p.innerHTML = `${msg}`
        resul.appendChild(p);
    }
} 

//p.classList.add('paragrafo_resultado'); // p vai receber também uma classe de nome paragrafo-resultado  
//p.innerHTML = 'Qualquer coisa' // Dentro da caracteristica html do elemento p vai receber a string qualque coisa
//resul.appendChild(p); // Vai adicionar um filho para a div pai-resultado assim adicionando p já totalmente editando com os elementos html e tags