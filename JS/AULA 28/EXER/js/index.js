const data = new Date();

const semana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta','Sabado'];

const blocoData = document.querySelector('.bloco_data');

function getZero(valor){
    if(valor<10){
        return `0${valor}`
    }
    return valor
}

function diaSemana(num){
    const semanaDay = semana[num];
    const dia = getZero(data.getDate());
    const mes = getZero(data.getMonth());
    const ano = getZero(data.getFullYear());
    const hora = getZero(data.getHours());
    const minuto = getZero(data.getMinutes());
    const segundos = getZero(data.getSeconds());
    return `${semanaDay} - ${dia}/${mes}/${ano} - ${hora}: ${minuto}: ${segundos}`;
}
function creatElemente(){
    const p = document.createElement('p');
    return p;
}

function dataSemana(data) {
    const p = creatElemente();
    p.innerHTML = diaSemana(data.getDay());
    blocoData.appendChild(p);
}
dataSemana(data);
