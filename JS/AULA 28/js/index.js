   // Swirch / Case
const data = new Date();
let diaSemana = data.getDay();

function getDiaSemanaTexto (diaSemana) {

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sabádo'
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }  
}     

const diadaSemana = getDiaSemanaTexto(diaSemana);

console.log(diadaSemana);
