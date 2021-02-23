const conteiner = document.querySelector('.container');
/**
 * Preciso de uma função que crie as horas, mas ela por si não ira
 * gera as horas, minutos ou segundos, isso fica a cargo da função
 * setInterval implementada nas aulas anterior, que vai gerar um segundo
 * a cada 1 segundo = 1000ms
 */

function getHourSecunds(segundos) {
    const data = new Date(segundos * 1000); // segundo recebido precisa ser multiplicados por 1000 para vira segundos
    return data.toLocaleTimeString('pt-BR', { // Converte a data em string para retornar
        hour12: false,
        timeZone: 'UTC' // Muda o timer zone 
    });
}
let segundos = 0;
let timer;

function playCro(display) {
    timer = setInterval(function () {
        segundos++;
        display.innerHTML = getHourSecunds(segundos);
    }, 1000);
}

const creatElement = () => {
    const elementos = [
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('button'),
        document.createElement('div')];

    const [play, pause, reset, display] = elementos;

    const div = document.createElement('div')


    play.innerHTML = 'Play';
    play.setAttribute('type', 'click');
    play.classList.add('play');
    pause.innerHTML = 'Pause';
    pause.setAttribute('type', 'click');
    pause.classList.add('pause');
    reset.innerHTML = 'Reset';
    reset.setAttribute('type', 'click');
    reset.classList.add('reset');


    div.appendChild(play);
    div.appendChild(pause);
    div.appendChild(reset);

    conteiner.appendChild(display);
    display.classList.add('display');

    conteiner.appendChild(div);

    display.style.backgroundColor = 'whiter';
    display.style.textAlign = 'center';
    display.style.position = 'relative';
    display.style.fontSize = '80px';
    display.style.display = 'block';
    display.style.margin = '50px auto';

    play.style.margin = '20px auto'
    pause.style.margin = '20px auto'
    reset.style.margin = '20px auto'


    div.style.textAlign = 'center';

    display.innerHTML = '00:00:00';
    let validador = 0;
        
        play.addEventListener('click', function (e) {
            
            if(validador < 1){
                validador += 1;
                display.style.color = 'black';
                playCro(display);
                
            }
        });
    pause.addEventListener('click', function (e) {
        //e.preventDefault();
        display.style.color = 'red';
        validador = 0;
        clearInterval(timer); // Pausa o timer

    });
    reset.addEventListener('click', function (e) {
        //e.preventDefault();
        display.innerHTML = 'RESET..';
        display.style.color = 'black'
        segundos = 0;
        if (validador < 1) {
            validador +=1
            display.style.color = 'black';
            playCro(display);
        }e.defaultPrevented();

    });

}

creatElement();