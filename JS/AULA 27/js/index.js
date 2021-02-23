const data = new Date()

function zeroAEsquerda(num){
    if(num < 0){
        return `0${num}`;
    } else {
        return num;
    }
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth()) + 1;
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());


    return `${dia}\ ${mes}\ ${ano} ${hora}: ${minutos}: ${segundos}`;
}

const dataBrasil = formataData(data);

console.log(dataBrasil);